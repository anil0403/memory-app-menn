import { prismadb } from "../lib/prismaConfig.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prismadb.post.findMany();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const createdPost = await prismadb.post.create({
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
