import Head from "next/head";

import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
