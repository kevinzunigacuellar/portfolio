import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import fs from 'fs'

export const markdownToHtml = async markdown => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)
  return processedContent.toString()
}
export const readDirectory = directory => {
  return fs.readdirSync(directory)
}

export const readFile = file => {
  return fs.readFileSync(file)
}
