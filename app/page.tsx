import PostList from "@/src/components/PostList";
import { Suspense } from "react";

const Home = async () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PostList />
    </Suspense>
  );
};

export default Home;
