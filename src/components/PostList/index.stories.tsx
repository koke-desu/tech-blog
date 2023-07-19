import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Presentation from "./presentation";
import { mockPost } from "@/src/mocks/mockPost";

export default { component: Presentation } as ComponentMeta<typeof Presentation>;

export const Primary: ComponentStory<typeof Presentation> = () => (
  <Presentation posts={[mockPost, mockPost, mockPost, mockPost]} />
);
