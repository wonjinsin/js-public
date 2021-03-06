import {useState} from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
  const {
      target: { value }
    } = e;
    setValue(value);
  };

  const reset = () => {
    setValue("");
  }

  return { value, onChange, reset };
}

export default useInput;