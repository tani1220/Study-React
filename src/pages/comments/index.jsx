import Head from "next/head";
import { Comments } from "src/components/Comments";
import { Header } from "src/components/Header";

const CommentPage = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />

      <Comments />
    </div>
  );
};

export default CommentPage;
