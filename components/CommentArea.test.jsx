import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommentArea from "./CommentArea";

describe("Render CommentArea", () => {
  it("finds comment area", () => {
    render(<CommentArea />);
    const title = screen.getByText(/Commenti degli utenti/i);
    expect(title).toBeInTheDocument();
  });
});
