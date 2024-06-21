import { MetadataRoute } from "next";
import sitemap from "./sitemap";
const https: string = "https://my-app-posts.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${https}/sitemap.xml`,
  };
}
