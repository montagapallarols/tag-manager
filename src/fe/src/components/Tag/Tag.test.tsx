import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tag from "./Tag";

const tag = { id: "1", value: "Test Tag" };
const deleteTagMock = jest.fn();

describe("Tag component", () => {
  it("should render tag value and remove button", () => {
    render(<Tag tag={tag} deleteTag={deleteTagMock} />);

    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toHaveTextContent("Test Tag");

    const removeButton = screen.getByTestId("tag-remove-button");
    expect(removeButton).toBeInTheDocument();
  });

  it("should call deleteTag function when remove button is clicked", () => {
    render(<Tag tag={tag} deleteTag={deleteTagMock} />);

    const removeButton = screen.getByTestId("tag-remove-button");
    fireEvent.click(removeButton);

    expect(deleteTagMock).toHaveBeenCalledWith("1");
  });
});