import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostList from "./";
import { mockPost } from "@/src/mocks/mockPost";

export default { component: PostList } as ComponentMeta<typeof PostList>;

export const Primary: ComponentStory<typeof PostList> = () => (
  <PostList posts={[mockPost, mockPost, mockPost, mockPost]} />
);
