import { prismadb } from "../lib/prismaConfig.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prismadb.post.findMany();
    // console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { creator, title, message, tags, selectedFile } = req.body;
  // console.log(creator);
  try {
    const createdPost = await prismadb.post.create({
      data: {
        creator: creator,
        title: title,
        message: message,
        tags: tags,
        selectedFile: selectedFile,
      },
    });
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const { creator, title, message, tags, selectedFile } = req.body;
  try {
    const updatedPost = await prismadb.post.update({
      where: {
        id: _id,
      },
      data: {
        creator: creator,
        title: title,
        message: message,
        tags: tags,
        selectedFile: selectedFile,
      },
    });
    return res.status(200).json({ updatedPost });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
