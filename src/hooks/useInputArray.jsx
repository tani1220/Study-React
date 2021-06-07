import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const hundleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内だよ");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const hundleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("文字が被ってるよ");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, hundleChange, hundleAdd };
};
