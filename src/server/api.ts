"use server";

import { database } from "./db";

export const getHomeData = async () => {
  return database.map(
    (el: DataType): HomeDataType => ({ title: el.title, id: el.id })
  );
};

export const getPost = async (id: string) => {
  const data: any = database.find((el: DataType): any => el.id === id);
  return data;
};
