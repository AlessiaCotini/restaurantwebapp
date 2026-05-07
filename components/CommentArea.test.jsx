import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    const allBooks = screen.getAllByTestId("search");
    fireEvent.click(allBooks[0]);
    const comment = await screen.findAllByTestId("comment");
    expect(comment.length).toBeGreaterThan(0);
  });
});
