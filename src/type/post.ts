import { Dayjs } from "dayjs";
import { TagType } from "./tag";

// Markdownをパースした結果の型
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
