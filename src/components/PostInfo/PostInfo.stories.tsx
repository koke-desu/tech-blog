import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostInfo from "./PostInfo";
import { mockPost } from "@/src/mocks/mockPost";

export default { component: PostInfo, args: { post: mockPost } } as ComponentMeta<typeof PostInfo>;

export const Primary: ComponentStory<typeof PostInfo> = (args) => <PostInfo post={args.post} />;
