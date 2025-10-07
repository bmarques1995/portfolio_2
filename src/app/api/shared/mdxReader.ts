import fs from 'fs'
import path from 'path'
import { Metadata } from './postMetadata'

// export function parseFrontmatter(fileContent: string) {
//   let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
//   let match = frontmatterRegex.exec(fileContent)
//   let frontMatterBlock = match![1]
//   let content = fileContent.replace(frontmatterRegex, '').trim()
//   let frontMatterLines = frontMatterBlock.trim().split('\n')
//   let metadata: Partial<Metadata> = {}

//   frontMatterLines.forEach((line) => {
//     let [key, ...valueArr] = line.split(': ')
//     let value = valueArr.join(': ').trim()
//     value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
//     metadata[key.trim() as keyof Metadata] = value
//   })

//   return { metadata: metadata as Metadata, content }
// }

export function extractMetadata(fileContent: string): Metadata | null {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/m;
    const match = frontmatterRegex.exec(fileContent);
    if (!match) return null;

    const frontMatterBlock = match[1].trim();
    const metadata: Partial<Metadata> = {};

    for (const line of frontMatterBlock.split("\n")) {
        const [key, ...valueArr] = line.split(":");
        if (!key) continue;

        let value = valueArr.join(":").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // remove surrounding quotes
        metadata[key.trim() as keyof Metadata] = value;
    }

    return metadata as Metadata;
}

export function parseFrontmatter(fileContent: string): {
    metadata: Metadata | null;
    content: string;
} {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/m;
    const metadata = extractMetadata(fileContent);

    // Remove the frontmatter block from the content if present
    const content = fileContent.replace(frontmatterRegex, "").trim();

    return { metadata, content };
}

export function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

export function readMDXFile(filePath: string) {
  return fs.readFileSync(filePath, 'utf-8');
}

export function getMDXPost(dir: string, slug: string) {
  const mdxFile = `${dir}/${slug}.mdx`
  const mdxContent = readMDXFile(mdxFile);
  let { metadata, content } =  parseFrontmatter(mdxContent)

  return {
    metadata,
    content,
  }
}

export function getMDXMetadata(dir: string){
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const mdxContent = readMDXFile(path.join(dir, file));
    let { metadata, content } =  parseFrontmatter(mdxContent)
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
    }
  })
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}