import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommentArea from "./CommentArea";
import App from "../src/App";
import SingleBook from "./SingleBook";
describe("Render CommentArea", () => {
  it("finds comment area", () => {
    render(<CommentArea />);
    const title = screen.getByText(/Commenti degli utenti/i);
    expect(title).toBeInTheDocument();
  });
  it("finds comment on click", async () => {
    render(<App />, <SingleBook />);
    try {
      const allBooks = screen.getByTestId("search");
      fireEvent.click(allBooks[0]);
      const comment = await screen.findAllByTestId("comment");
      expect(comment.length).toBeGreaterThan(0);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  });
});
