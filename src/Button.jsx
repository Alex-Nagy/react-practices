import { render } from "@testing-library/react";
import React from "react";
import Text from "./Text";

const Button = (props) => {
  const { title } = props;

  const insertText = () => {
    render(<Text />);
  };
  return <button onClick={insertText}>{title}</button>;
};

export default Button;
