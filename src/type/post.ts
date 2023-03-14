import { Dayjs } from "dayjs";
import { TagType } from "./tag";

export type PostType = {
  id: string;
  title: string;
  tags: TagType[];
  createdAt: Dayjs;
  updatedAt: Dayjs;
  body: string;
};
