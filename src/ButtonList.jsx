import { render } from "@testing-library/react";
import Text from "./Text";

const ButtonList = () => {
  const tenTimesText = () => {
    for (let i = 0; i < 10; i++) {
      render(<Text />);
    }
  };

  return <button onClick={tenTimesText}>Tízszer</button>;
};

export default ButtonList;
