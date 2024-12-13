import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Heading from "./Heading";

describe("Heading", () => {
  it("should render", () => {
    render(<Heading />);
    const heading = screen.getByRole("heading", {name: /faqs/i})
    expect(heading).toBeInTheDocument();
  });
});
