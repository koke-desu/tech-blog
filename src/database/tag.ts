import { TagType } from "@/src/type/tag";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// 記事のデータ一覧を取得する。
export const getTags = async (): Promise<TagType[]> => {
  const db = getFirestore();
  return getDocs(collection(db, "tags")).then((docs) => {
    return docs.docs.map((doc) => {
      return doc.data() as TagType;
    });
  });
};
