import { TagType } from "@/src/type/tag";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./initialize";

// 記事のデータ一覧を取得する。
export const useGetTags = async (): Promise<TagType[]> => {
  const [tags, setTags] = useState<TagType[]>([]);
  useEffect(() => {
    getDocs(collection(db, "tags")).then((docs) => {
      const tags = docs.docs.map((doc) => {
        return doc.data() as TagType;
      });
      setTags(tags);
    });
  }, []);

  return [];
};
