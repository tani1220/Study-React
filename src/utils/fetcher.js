export const fetcher = async (url) => {
  const responce = await fetch(url);

  if (!responce.ok) {
    throw new Error("エラーだよ");
  }

  const json = await responce.json();
  return json;
};
