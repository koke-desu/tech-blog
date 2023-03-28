import { Dayjs } from "dayjs";
import { TagType } from "./tag";

// すでにParseしてDBに保存されているデータの型
export type PostBodyType =
  | {
      heading: string;
      level: number;
      children: PostBodyType[];
    }
  | string;

export type PostType = {
  id: string;
  title: string;
  tags: TagType[];
  createdAt: Dayjs;
  updatedAt: Dayjs;
  body: PostBodyType[];
};
