import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const markdownToHtml = async markdown => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return processedContent.toString()
}
export const readPostsDirectory = locale => {
  return fs.readdirSync(path.join(process.cwd(), 'posts', locale))
}

export const readMarkdown = (locale, file) => {
  return fs.readFileSync(path.join(process.cwd(), 'posts', locale, file))
}

export const parseMarkdown = data => {
  return matter(data)
}
