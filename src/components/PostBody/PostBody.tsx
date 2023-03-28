import { PostBodyType, PostType } from "@/src/type/post";
import React from "react";
import "./markdown.css";
type Props = { post: PostType };

const PostBody: React.FC<Props> = ({ post }) => {
  const { body } = post;

  return (
    // markdown-bodyはgithubのmarkdownのスタイルを適用するためのクラス
    <div className="markdownBody">
      {body.map((content, index) => (
        <BodyContent key={`body-content-${index}`} content={content} />
      ))}
    </div>
  );
};

const BodyContent = ({ content }: { content: PostBodyType }) => {
  if (typeof content === "string") return <p>{content}</p>;

  // h1はサイトに一つしかないので、最大をh2として扱う
  const headLevel = content.level + 1;

  return (
    <div>
      {React.createElement(`h${headLevel}`, {}, content.heading)}
      {content.children.map((child, index) => (
        <BodyContent
          key={`body-content-${headLevel}-${content.heading}-${index}`}
          content={child}
        />
      ))}
    </div>
  );
};

export default PostBody;
