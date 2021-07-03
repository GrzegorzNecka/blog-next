import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory); //Reads the contents of the directory.

  // by gray-matter i copy content of the files and paste it into

  return files.map((file) => {
    const fullPath = join(directory, file); //full path to file
    const fileContents = fs.readFileSync(fullPath, 'utf8'); //Reads the contents of the file
    const { data } = matter(fileContents); // matter can read content of file and save it into variable data

    return {
      ...data,
      slug: file.replace('.md', ''), //name of the file
      createdAt: data.date ? Number(new Date(data.date)) : null // we trannsfer date as intiger of miliseconds
    };
  });
};

//this function will parse the specific file content

export const getFileBySlug = async (path, slug) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent } = matter(fileContents);
  let content = '';
  if (markdownContent) {
    content = await remark().use(html).use(prism).process(markdownContent);
    content = content.toString();
  }

  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};
