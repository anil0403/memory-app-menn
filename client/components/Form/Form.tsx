import React from "react";
import { useState, useEffect } from "react";
import Input from "./Input";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "@/actions/posts";
import { useSelector } from "react-redux";

interface FormProps {
  currentId?: any;
  setCurrentId?: any;
}
const Form: React.FC<FormProps> = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state: any) =>
    currentId
      ? state.posts.find((message: any) => message.id === currentId)
      : null
  );
  console.log(`current id = ${currentId}`);
  console.log(`post = ${post}`);
  console.log(`post = ${postData}`);

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e: any) => {
    console.log(`postData = ${postData}`);
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else if (currentId === null) {
      return;
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div className="w-[35%]">
      <h1 className="my-2 text-2xl font-semibold text-center">
        {currentId ? "Editing" : "Creating"} a memory
      </h1>
      <form
        onSubmit={handleSubmit}
        className="shadow-md shadow-slate-700 p-5 flex flex-col items-start rounded-md"
      >
        <Input
          label="Creator :"
          id="creator"
          type="text"
          value={postData.creator}
          onChange={(e: any) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <Input
          label="Title :"
          id="title"
          type="text"
          value={postData.title}
          onChange={(e: any) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <Input
          label="Message :"
          id="message"
          type="text"
          value={postData.message}
          onChange={(e: any) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <Input
          label="Tags :"
          id="tags"
          type="text"
          value={postData.tags}
          onChange={(e: any) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="w-full my-5">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          className="w-full bg-sky-500 py-2 text-white text-md rounded-md hover:bg-sky-600 transition"
          type="submit"
        >
          Submit
        </button>
        <button
          className="w-full bg-red-600 my-2 py-1 text-white text-md rounded-md hover:bg-red-700 transition"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
