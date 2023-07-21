"use client";
import { getPosts } from "@/src/database/post";
import React from "react";
import { useQuery } from "react-query";
import Presentation from "./presentation";
type Props = {};

const Container: React.FC<Props> = ({}) => {
  const { data: postList } = useQuery("posts", getPosts);
  return <Presentation posts={postList!} />;
};
export default Container;
