import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostThumbnail from "./";
import { mockPost } from "@/src/mocks/mockPost";

export default { component: PostThumbnail } as ComponentMeta<typeof PostThumbnail>;

export const Primary: ComponentStory<typeof PostThumbnail> = () => (
  <PostThumbnail post={mockPost} />
);
