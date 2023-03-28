import { PostType } from "@/src/type/post";
import Image from "next/image";
import React from "react";
import Tag from "../Tag/Tag";
type Props = { post: PostType };

const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="font-bold text-4xl mt-16">{post.title}</h2>
      <div className="flex flex-row gap-8 mt-8">
        <div className="flex flex-row gap-4">
          <Image
            src="/images/icon/icon_schedule.svg"
            alt="投稿日"
            width={24}
            height={24}
            className="fill-text"
          />
          <time dateTime={post.createdAt.format("YYYY/MM/DD")}>
            {post.createdAt.format("YYYY/MM/DD")}
          </time>
        </div>
        <div className="flex flex-row gap-4">
          <Image src="/images/icon/icon_update.svg" alt="更新日" width={24} height={24} />
          <time dateTime={post.updatedAt.format("YYYY/MM/DD")}>
            {post.updatedAt.format("YYYY/MM/DD")}
          </time>
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-6">
        {post.tags.map((tag) => (
          <Tag tag={tag} key={`tag-${tag.id}`} />
        ))}
      </div>
    </div>
  );
};
export default PostInfo;
