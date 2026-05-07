// Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro,
// non ci siano istanze del componente SingleComment all’interno del DOM
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SingleComment from "./SingleComment";
import App from "../src/App";
describe("not to be comment starting app", () => {
  it("not find comment starting app", () => {
    render(<App />, <SingleComment />);
    const comment = screen.queryByTestId("comment");
    expect(comment).not.toBeInTheDocument();
  });
});
