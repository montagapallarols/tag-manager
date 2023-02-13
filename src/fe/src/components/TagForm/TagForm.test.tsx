import '@testing-library/jest-dom'
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TagForm from "./TagForm";

const onSubmitMock = jest.fn();

describe("TagForm component", () => {
  it("should render input and submit button", () => {
    render(<TagForm onSubmit={onSubmitMock} />);

    const input = screen.getByTestId("tag-input");
    expect(input).toBeInTheDocument();

    const button = screen.getByTestId("tag-submit-button");
    expect(button).toBeInTheDocument();
  });

  it("should submit input value on form submit", () => {
    render(<TagForm onSubmit={onSubmitMock} />);

    const input = screen.getByTestId("tag-input");
    const button = screen.getByTestId("tag-submit-button");

    fireEvent.change(input, { target: { value: "Test Tag" } });
    fireEvent.click(button);

    expect(onSubmitMock).toHaveBeenCalledWith("Test Tag");
  });
});