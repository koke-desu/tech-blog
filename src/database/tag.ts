import { createClient } from "contentful";
import { TagType } from "@/src/type/tag";

// contentfulから記事のデータ一覧を取得する。
export const getTags = async (): Promise<TagType[]> => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await client.getEntries<TagType>({
    content_type: "tag",
  });

  return entries.items.map((entry) => {
    return {
      id: entry.sys.id,
      label: entry.fields.label,
      icon: entry.fields.icon,
      link: entry.fields.link,
    };
  });
};
