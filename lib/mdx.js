import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getSourceOfFile = (fileName, locale) => {
  return fs.readFileSync(path.join(POSTS_PATH, locale, fileName), 'utf8')
}

export const getAllPosts = locale => {
  return fs
    .readdirSync(path.join(POSTS_PATH, locale))
    .filter(path => /\.mdx?$/.test(path))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const source = getSourceOfFile(fileName, locale)
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug, locale) => {
  const mdxSource = getSourceOfFile(slug + '.mdx', locale)
  const result = await bundleMDX({
    source: mdxSource,
  })

  const { code, frontmatter } = result

  return {
    frontmatter,
    code,
  }
}

export const getAllPostsPaths = locales => {
  const paths = []
  locales.forEach(locale => {
    fs.readdirSync(path.join(POSTS_PATH, locale))
      .filter(path => /\.mdx?$/.test(path))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx?$/, '')
        return paths.push({ params: { slug }, locale: locale })
      })
  })
  return paths
}
