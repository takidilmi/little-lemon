import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


test("Renders all components", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const navElement = screen.getByTestId("nav");
  expect(navElement).toBeInTheDocument();
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
  const menuElement = screen.getByTestId("menu");
  expect(menuElement).toBeInTheDocument();
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
