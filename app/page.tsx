import PostList from "@/src/components/PostList";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default Home;
