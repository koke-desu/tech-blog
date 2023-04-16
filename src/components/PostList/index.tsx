import { PostType } from "@/src/type/post";
import React from "react";
import PostThumbnail from "../PostThumbnail";
type Props = {
  posts: PostType[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto place-items-center">
      {posts.map((post) => (
        <PostThumbnail post={post} key={`post-list-${post.id}`} />
      ))}
    </div>
  );
};
export default PostList;
