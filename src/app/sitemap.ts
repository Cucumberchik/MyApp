import { getHomeData } from "@/server/api";
import { MetadataRoute } from "next";

const https: string = "https://my-app-posts.vercel.app/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data: HomeDataType[] = await getHomeData();
  const postEntries: MetadataRoute.Sitemap = data.map(({ id }) => ({
    url: `${https}/posts/${id}`,
  }));
  return postEntries;
}
