import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostInfo from "./PostInfo";
import { PostType } from "@/src/type/post";
import dayjs from "dayjs";
import { TagType } from "@/src/type/tag";

const tag: TagType = {
  id: "tag1",
  label: "React",
  link: "#",
  icon: "/images/icon/icon_react.svg",
};

const post: PostType = {
  id: "tag1",
  title: "記事のタイトル",
  createdAt: dayjs(),
  updatedAt: dayjs(),
  tags: [tag, tag],
  body: "記事の本文",
};

export default { component: PostInfo, args: { post: post } } as ComponentMeta<typeof PostInfo>;

export const Primary: ComponentStory<typeof PostInfo> = (args) => <PostInfo post={args.post} />;
