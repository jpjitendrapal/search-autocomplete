import "./style.css";
import { getResult } from "./model";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({});
  const [displayResult, setDisplayResult] = useState("");
  const timeoutId = useRef();

  useEffect(() => {
    if (keyword === result?.keyword) {
      setDisplayResult(result?.result);
    }
  }, [result, keyword]);

  useEffect(() => {
    getResult(keyword).then((res) => {
      setResult(res);
    });
  }, [keyword]);

  const changeHandler = (evt) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setKeyword(evt.target.value);
    }, 300);
  };

  return (
    <div className="search">
      <input type="text" onChange={changeHandler} placeholder="search here" />
      <div>{displayResult}</div>
    </div>
  );
}
