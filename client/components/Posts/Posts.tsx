import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

interface PostsPros {
  setCurrentId?: any;
}
const Posts: React.FC<PostsPros> = ({ setCurrentId }) => {
  const posts = useSelector((state: any) => state.posts);
  // console.log(posts);
  return (
    <div className="w-[70%] py-10 px-2 right-0">
      <div className="w-full flex flex-wrap gap-5 ">
        {!posts.length
          ? "Refresh the page"
          : posts.map((post: any) => <Post post={post} key={post.id} setCurrentId={setCurrentId} />)}
      </div>
    </div>
  );
};
export default Posts;
