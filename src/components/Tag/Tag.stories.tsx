import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";
import { TagType } from "@/src/type/tag";

const tag: TagType = {
  id: "tag1",
  label: "React",
  link: "#",
  icon: "/images/icon/icon_react.svg",
};

export default { component: Tag, args: { tag: tag } } as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = (args) => <Tag tag={args.tag} />;
