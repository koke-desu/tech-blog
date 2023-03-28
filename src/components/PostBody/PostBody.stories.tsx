import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostBody from "./PostBody";
import { mockPost } from "@/src/mocks/mockPost";

export default { component: PostBody, args: { post: mockPost } } as ComponentMeta<typeof PostBody>;

export const Primary: ComponentStory<typeof PostBody> = (args) => <PostBody post={args.post} />;
