import {useState} from "react";

const useInput = () => {
  const [input, setInput] = useState(0);
  const onChange = (value) => {
    setInput(value);
  }

  return [input, onChange];
}

export default useInput;