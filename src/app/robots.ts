import { MetadataRoute } from "next";
const https: string = "https://my-app-posts.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/posts/",
      },
    ],
    sitemap: `${https}/sitemap.xml`,
  };
}
