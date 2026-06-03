import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renders the homepage hero content", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Votre informatique\. Automatisée\. Optimisée\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link")
        .some((link) => link.getAttribute("href") === "/" && /KLYON/i.test(link.textContent || "")),
    ).toBe(true);
  });
});
