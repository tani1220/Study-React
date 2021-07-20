import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new error("エラー発生");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoding(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loding) {
    return <div>loding now ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div>データは空</div>;
  }

  return (
    <ol>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
