import { useState } from "react";

export default function useInput() {
  const [title, setTitle, resetTitle] = useState("");
  const [price, setPrice, resetCss] = useState("");
  const [img, setImg, resetImg] = useState("");

  const onChangeHanlder = (e) => {
    setTitle(e.target.value), setPrice(e.target.value), setImg(e.target.value);
  };
  return [title];
}
