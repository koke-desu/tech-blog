import { PostType } from "@/src/type/post";
import Image from "next/image";
import React from "react";
import Tag from "../Tag/Tag";
type Props = {
  post: PostType;
};

const PostThumbnail: React.FC<Props> = ({ post }) => {
  return (
    <article className="border border-gray shadow-md rounded-md max-w-xs w-full aspect-square flex flex-col items-center">
      <div className="w-full aspect-video relative">
        <Image fill src={post.thumbnail} alt={post.title} className="object-contain" />
      </div>
      <h2 className="font-bold text-lg my-4 line-clamp-2 text-text">{post.title}</h2>
      <div className="flex flex-row gap-2 justify-center items-center">
        {post.tags.map((tag) => (
          <Tag key={`post-${post.id}-tag-${tag.id}`} tag={tag} />
        ))}
      </div>
    </article>
  );
};
export default PostThumbnail;
