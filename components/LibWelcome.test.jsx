import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LibWelcome from "./LibWelcome";

describe("Montaggio Welcome", () => {
  it("finds welcome", () => {
    render(<LibWelcome />);
    const paragraph = screen.getByText(
      /Estratto da "Le città invisibili" di Italo Calvino/i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
