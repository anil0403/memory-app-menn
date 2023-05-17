import React from "react";
import moment from "moment";
import { BsThreeDots, BsFillSuitHeartFill } from "react-icons/bs";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
interface PostPros {
  post: any;
  setCurrentId?: any;
}
const Post: React.FC<PostPros> = ({ post, setCurrentId }) => {
  // console.log(post);
  const imageUrl = post.selectedFile.base64;
  return (
    <div className="shadow-md shadow-slate-700 rounded-md">
      <div className="w-full h-200 relative">
        <Image
          className="rounded-t-md"
          src={imageUrl}
          width={200}
          height={200}
          alt="My Image"
        />
        <div className="top-1 absolute p-2 text-white w-full">
          <h1 className="text-lg font-semibold">{post.creator}</h1>
          <span className="text-sm">{moment(post.createdAt).fromNow()}</span>
          <BsThreeDots
            onClick={() => setCurrentId(post.id)}
            className="absolute top-1 right-1"
            size={30}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-blue-500 px-1 py-3">
          {post.tags.map((tag: string) => `#${tag} `)}
        </p>

        <h1 className="px-1 text-lg font-semibold overflow-hidden ">
          {post.message}
        </h1>
        <section className="flex flex-row justify-between px-4 py-3">
          <div className="flex gap-2 items-center">
            <BsFillSuitHeartFill
              onClick={() => {}}
              color="red"
              className=""
              size={20}
            />
            <span className="text-lg">{post.likeCount}</span>
          </div>

          <MdDelete onClick={() => {}} color="red" size={20} />
        </section>
      </div>
    </div>
  );
};
export default Post;
