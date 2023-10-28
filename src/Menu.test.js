import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./components/Menu";
import Swal from "sweetalert2";

describe("Menu component", () => {
    test("renders menu items correctly", () => {
      render(<Menu />);
  
      // Check if the menu header is rendered correctly
      expect(screen.getByText("This weeks specials!")).toBeInTheDocument();
  
      // Check if the menu items are rendered correctly
      const recipeTitles = screen.getAllByRole("heading", { level: 5 });
      expect(recipeTitles).toHaveLength(3); // Assuming there are 3 recipes in the "recipes" array
  
      // Check if the order button works correctly
      const orderButtons = screen.getAllByText("Order Now");
      fireEvent.click(orderButtons[0]); // Click the first button
      expect(screen.getByText("Do you want to confirm order?")).toBeInTheDocument();
    });
  });