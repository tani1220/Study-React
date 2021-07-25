import { useCallback, useEffect, useReducer } from "react";

const inititalArg = {
  data: [],
  loging: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loding: false,
      };
    case "error":
      return {
        ...state,
        error: action.error,
        loding: false,
      };
    default: {
      throw new Error("errorだよ");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, inititalArg);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラー発生");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loding) {
    return <div>loding now ...</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
