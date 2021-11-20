import Accordion from "../Accordion";
import { render, screen, within } from "@testing-library/react";

const componentProps = {
  active: "Big Fish in the sea",
  setActive: {},
  chapter: {
    title: "Big Fish in the sea",
    docoments: [
      { completed: true, type: "text", topic: "tilapia and its kind" }
    ]
  }
};

it("should render without breaking", () => {
  render(<Accordion {...componentProps} />);
});
