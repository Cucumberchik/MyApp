import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return [
    {
      url: "",
    },
  ];
};

export default sitemap;
