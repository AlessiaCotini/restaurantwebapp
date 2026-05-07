import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchBook from "./SearchBook";
import SingleBook from "./SingleBook";
describe("search area test", () => {
  it("after search the array was filtered", () => {
    render(<SearchBook />, <SingleBook />);
    const input = screen.getByPlaceholderText(/.../i);
    fireEvent.change(input, { target: { value: "star" } });
    const search = screen.getAllByTestId("search");
    expect(search.length).toBeGreaterThan(0);
    search.forEach((book) => {
      expect(book.textContent).toMatch(/star/i);
    });
  });
});
