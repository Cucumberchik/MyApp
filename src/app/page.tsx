"use server";
import { NextPage } from "next";
import scss from "./page.module.scss";
import { getHomeData } from "@/server/api";
import Link from "next/link";

const Home: NextPage = async () => {
  const data: HomeDataType[] = await getHomeData();
  return (
    <main className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.posts}>Posts</h1>
          {data.map((el, idx: number) => (
            <article key={idx}>
              <h2>
                <Link href={`/posts/${el.id}`}>{el.title}</Link>
              </h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
