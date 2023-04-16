import { TagType } from "@/src/type/tag";
import Image from "next/image";
import React from "react";
type Props = { tag: TagType };

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <div className="flex flex-row gap-1 px-3 py-1 border border-gray rounded-2xl max-w-max">
      <Image src={tag.icon} alt={tag.label} width={20} height={20} />
      <p className="text-sm text-text font-bold">{tag.label}</p>
    </div>
  );
};
export default Tag;
