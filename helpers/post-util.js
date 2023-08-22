import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postPath = path.join(process.cwd(), "content/posts");

export function getPostsFiles() {
  return fs.readdirSync(postPath);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extension
  const filePath = path.join(postPath, `${postSlug}.md`);
  const fileConent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileConent);
  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts.sort((postA, postB) => (postA.date > postB ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
