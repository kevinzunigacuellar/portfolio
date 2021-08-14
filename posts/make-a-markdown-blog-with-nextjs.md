---
title: Make a markdown blog with NextJS
description: "Learn how to make a static site generation blog with NextJS using markdown"
---
# How to make a blog with Next.js and Markdown 
---
### When to use Markdown?

Markdown is a great tool to create websites with dense content such as: blogs or documentation. It allows the author to spend less time coding HTML elements and CSS styles and more time to focus on the content.

### Why Next.js?

NextJS is a react framework that has two forms of pre-rendering: Static Site Generatior (SSG) and Server Side Rendering (SSR). To create a blog (were most of the information is static) we will use SSG to generate all our blog pages at build time.

### Libraries

To code our Next.js markdown blog we will need a few libraries.

```
yarn add gray-matter
yarn add remark
yarn add remark-html
```

1. [gray-matter](https://github.com/jonschlinkert/gray-matter) is a front matter parser that will help us parse the metadata from the markdown files.
2. [remark](https://github.com/remarkjs/remark) is a markdown parser that will help us parse our markdown content into HTML.

### Let's begin:

The first step is to create a next application. To create a project, run:

```
npx create-next-app
# or
yarn create next-app
```

Create a top-level directory called **posts**. Here we will create our markdown posts. To start lets create two posts. 

```
/posts/first-post.md
---
title: Welcome to my first post
description: My first post
---
# Welcome to my blog!

This is my first post.
```
```
/posts/second-post.md
---
title: Welcome to my second post
description: My second post
---
# Welcome to my blog!

This is my second post.
```
Inside pages create a new folder called blog. Inside blog create a file called [slug].js

In [slug].js create a new react component name Post and define getStaticProps and getStaticPaths.
```
/pages/blog/Post.js

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Post() {
  return (
    <div>
      This is my Post Component
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths:[],
    fallback: false,
  }
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

```

[getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) is used to pre-render specific paths. Inside paths we can specify the parameters for each pre-rendered page. 

Set fallback to false to pre-render paths only at build time. Here is an example:
```
return {
  paths: [
    { params: { slug: '1' } },
    { params: { slug: '2' } }
  ],
  fallback: false
}
```
This is how our final code for getStaticPaths looks like let's dive into each line to see what happening:
```
export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts')  
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }))
  return {
    paths,
    fallback: false,
  }
}
```
1. Read the folder posts which returns and array with the name of the files that are inside.
```
const files = fs.readdirSync('posts')  
// returns files = ['first-post.md','second-post.md]
```
2. Remove the '.md' and create a path array of objects with params and slug.
```
const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }))
  // paths would look like this:
    paths: [
        { params: { slug: 'first-post' } },
        { params: { slug: 'second-post' } }
    ],
```
[getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) is used to pre-render the page content. It returns a props object which contains any information that we would like to pass to a component. 

When used with getStaticPaths (like in this example) it requires an object as a parameter. Here is an example how the object looks like.
```
export const getStaticProps = async (context) = {
  // context : { params: {slug} }
}
```
This is how our final code for getStaticProps looks like let's dive into each line to see what happening:
```
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf8'
  )
  const parsedMarkedown = matter(markdownWithMetadata)
  const htmlContent = await markdownToHtml(parsedMarkedown.content)
  return {
    props: {
      contents: htmlContent,
      data: parsedMarkedown.data,
    },
  }
}
```
1. Destructure the object parameter in one line to get the slug.
```
getStaticProps({ params: { slug } })
// returns slug
```
2. Use path.join to get the file path for the slug
```
path.join('posts', slug + '.md')
// for the first post it returns:
// posts/first-post.md
```
3. Read markdown and converts it to a string
```
const markdownWithMetadata = fs.readFileSync(
  path.join('posts', slug + '.md'),
  'utf8')
```
4. Use gray-matter to parse the metadata and the content for a markdown
```
const parsedMarkdown = matter(markdownWithMetadata)
/* returns:
  parsedMarkdown = {
    data:{
      title,
      description
    }
    content,
  } 
*/
```
5. Convert the parsed markdown to html
```
const htmlContent = await markdownToHtml(parsedMarkedown.content)
```
To make the code easier to follow I moved my markdownToHtml function into another js file but here is how it works behind the scenes.
```
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const markdownToHtml = async markdown => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return processedContent.toString()
}
```
Now that getStaticProps returns the props that we need we can populate our Post component.
```
import Head from 'next/head'

export default function Post({ contents, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </>
  )
}
```

Congratulations, you have created your two first posts in your Next.js blog. Your [slug].js should look like this:
```
import fs from 'fs'
import Head from 'next/head'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ contents, data }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: contents }}></div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf8'
  )
  const parsedMarkedown = matter(markdownWithMetadata)
  const htmlContent = await markdownToHtml(parsedMarkedown.content)
  return {
    props: {
      contents: htmlContent,
      data: parsedMarkedown.data,
    },
  }
}
```
Don't forget about your markdownToHtml function.
```
// lib/markdownToHtml.js

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const markdownToHtml = async markdown => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return processedContent.toString()
}
```
All thats left to do is to run start you development server.
```
cd [name of your app]
yarn dev
# or
npm run dev
```
Assuming that your server is running in port 3000, you can visit your [first-post](http://localhost:3000/blog/first-post) and [second-post](http://localhost:3000/blog/second-post)