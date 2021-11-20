import Accordion from "../Accordion";
import ReactDOM from "react-dom";

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
  const div = document.createElement("div");
  ReactDOM.render(<Accordion {...componentProps} />, div);
});

it("should render all documents in a list within the accordion", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Accordion {...componentProps} />, div);

  const list = document.querySelector(".accordion");
  console.log({ list });
  // expect(list.find('ul').children()).toHaveLength(5)
});
