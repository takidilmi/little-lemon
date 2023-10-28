import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("BookingForm", () => {
    test("submits the form with correct values", () => {
      // Mock props
      const submitForm = jest.fn();
      const dispatch = jest.fn();
      const availableTimes = {
        availableTimes: ["10:00 AM", "12:00 PM", "2:00 PM"],
      };
  
      // Render the component
      render(
        <BookingForm
          submitForm={submitForm}
          dispatch={dispatch}
          availableTimes={availableTimes}
        />
      );
  
      // Fill in the form fields
      fireEvent.change(screen.getByLabelText("Choose Date:"), {
        target: { value: "2023-10-31" },
      });
      fireEvent.change(screen.getByLabelText("Choose Time:"), {
        target: { value: "12:00 PM" },
      });
      fireEvent.change(screen.getByLabelText("Number of Guests:"), {
        target: { value: "4" },
      });
      fireEvent.change(screen.getByLabelText("Occasion:"), {
        target: { value: "Birthday" },
      });
  
      // Submit the form
      fireEvent.click(screen.getByText("Make Your Reservation"));
  
      // Check if the form was submitted with the correct values
      expect(submitForm).toHaveBeenCalledTimes(1);
      expect(submitForm).toHaveBeenCalledWith(expect.any(Object));
  
      // Check if the dispatch function was called with the selected date
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith("2023-10-31");
    });
  });