import { createClient } from "contentful";
import { PostType } from "@/src/type/post";
import dayjs from "dayjs";

// contentfulから記事のデータ一覧を取得する。
export const getPosts = async (): Promise<PostType[]> => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await client.getEntries<PostType>({
    content_type: "post",
  });

  return entries.items.map((entry) => {
    return {
      id: entry.sys.id,
      title: entry.fields.title,
      tags: entry.fields.tags,
      createdAt: dayjs(entry.sys.createdAt),
      updatedAt: dayjs(entry.sys.updatedAt),
      body: entry.fields.body,
    };
  });
};