import dayjs from "dayjs";
import { PostType } from "../type/post";
import { TagType } from "../type/tag";

const tag: TagType = {
  id: "tag1",
  label: "React",
  link: "#",
  icon: "/images/icon/icon_react.svg",
};

export const mockPost: PostType = {
  id: "tag1",
  title: "記事のタイトル",
  createdAt: dayjs(),
  updatedAt: dayjs(),
  tags: [tag, tag],
  body: [
    {
      level: 1,
      heading: "見出し",
      children: [
        {
          level: 2,
          heading: "中見出し",
          children: ["中身"],
        },
        "中身",
        "あああ",
      ],
    },
  ],
};
