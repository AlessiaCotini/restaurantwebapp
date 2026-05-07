import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LibFantasy from "./LibFantasy";

(describe("finds how many cars like in json file"),
  () => {
    it("finds card", () => {
      render(<LibFantasy />);
      const cards = screen.getAllByTestId("card");
      expect(cards.toBe(150));
    });
  });
