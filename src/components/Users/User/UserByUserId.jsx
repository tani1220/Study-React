import { useUserByPostId } from "src/hooks/useFetchArray";

export const UserByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useUserByPostId(props.userId);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading now ...</div>;
  }

  if (isEmpty) {
    return <div>データは空</div>;
  }

  return <h2>作成者名 - {data.name}</h2>;
};
