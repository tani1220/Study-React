import { useUserByPostId } from "src/hooks/useFetchArray";

export const UserByUserId = (props) => {
  const { data, error, isLoding, isEmpty } = useUserByPostId(props.userId);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoding) {
    return <div>loding now ...</div>;
  }

  if (isEmpty) {
    return <div>データは空</div>;
  }

  return <h2>作成者名 - {data.name}</h2>;
};
