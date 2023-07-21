import { PostType } from "@/src/type/post";
import dayjs from "dayjs";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { db } from "./initialize";

export const getPosts = (): Promise<PostType[]> => {
  return getDocs(collection(db, "posts")).then((docs) => {
    return docs.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        createdAt: dayjs(data.createdAt.toDate()),
        updatedAt: dayjs(data.updatedAt.toDate()),
      } as PostType;
    });
  });
};
