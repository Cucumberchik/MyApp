"use server";
import { getPost } from "@/server/api";
import { Metadata, NextPage } from "next";
import { cache } from "react";

const getDoc = cache(async (id: string) => await getPost(id));

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const data: DataType = await getDoc(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
};

const Post: NextPage<{ params: { id: string } }> = async ({ params }) => {
  const data: DataType = await getDoc(params.id);
  return (
    <div
      className="div"
      style={{ width: "100%" }}>
      <div className="container">
        <article>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </article>
      </div>
    </div>
  );
};

export default Post;
