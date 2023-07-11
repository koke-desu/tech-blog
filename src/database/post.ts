import { PostType } from "@/src/type/post";
import dayjs from "dayjs";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "./initialize";

export const useGetPosts = (): PostType[] => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    getDocs(collection(db, "posts")).then((docs) => {
      const posts = docs.docs.map((doc) => {
        return doc.data() as PostType;
      });
      setPosts(posts);
    });
  }, []);

  return posts;
};
