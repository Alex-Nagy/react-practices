import { render } from "@testing-library/react";
import React from "react";
import Text from "./Text";

const Button = (props) => {
  const { text } = props;

  const insertText = () => {
    render(<Text />);
  };
  return <button onClick={insertText}>{text}</button>;
};

export default Button;
