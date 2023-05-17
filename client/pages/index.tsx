import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Form, Posts } from "@/components";
import { getPosts } from "../actions/posts";

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="w-5/6 my-5 mx-auto ">
      <div className=" w-full py-2 shadow-md shadow-slate-700 flex justify-center items-center gap-3 rounded-md">
        <h1 className="text-sky-500 text-4xl font-bold">Memories</h1>
        <Image src="/images/memories.png" alt="logo" height={50} width={50} />
      </div>
      <div className="flex justify-between my-10 mx-0">
        <Posts  setCurrentId={setCurrentId} />
        <Form currentId = {currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}
