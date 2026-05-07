import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SingleBook from "./SingleBook";
const book = {};
describe("card will change color", () => {
  it("find border", () => {
    render(<SingleBook book={book} />);
    const card = screen.getByTestId("search");
    fireEvent.click(card);
    expect(card).toHaveStyle({ outline: "3px solid #0d6efd" });
    fireEvent.click(card);
    expect(card).toHaveStyle({ outline: "none" });
  });
});
