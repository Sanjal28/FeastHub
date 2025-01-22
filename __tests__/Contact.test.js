import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load heading(h1) from contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument(); //to use toBeInTheDocument(),import jest-dom
});

// it and test both are same(alias)
it("should load inputBox from contact us component", () => {
  render(<Contact />);
//   since there are multiple input fields so use getAllBy
  const inputBox = screen.getAllByRole("textbox"); //since there are multiple input box which will be in array of object(here len is 2)
  expect(inputBox.length).toBe(2);
});
