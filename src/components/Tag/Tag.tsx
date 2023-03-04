import { TagType } from "@/src/type/tag";
import Image from "next/image";
import React from "react";
type Props = { tag: TagType };

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <div className="flex flex-row gap-3 px-4 py-2 border border-text rounded-2xl max-w-max">
      <Image src={tag.icon} alt={tag.label} width={24} height={24} />
      <p className="text-base text-text font-bold">{tag.label}</p>
    </div>
  );
};
export default Tag;
