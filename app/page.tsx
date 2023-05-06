import PostList from "@/src/components/PostList";
import { getPosts } from "@/src/database/post";

const Home = async () => {
  const posts = await getPosts();

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
};

export default Home;
