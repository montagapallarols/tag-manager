import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tag from "./Tag";

const mockTag = { id: "1", value: "Test Tag" };
const deleteTagMock = jest.fn();
const editTagMock = jest.fn();

describe("Tag component", () => {
  it("should render tag value and remove button", () => {
    render(
      <Tag
        tag={mockTag}
        deleteTag={deleteTagMock}
        tagToEdit={mockTag.id}
        editTag={editTagMock}
        setTagToEdit={() => {}}
      />
    );
  
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  
    const removeButton = screen.getByTestId("tag-remove-button");
    expect(removeButton).toBeInTheDocument();
  });
  

  it("should call deleteTag function when remove button is clicked", () => {
    render(
      <Tag
        tag={mockTag}
        deleteTag={deleteTagMock}
        tagToEdit={mockTag.id}
        editTag={editTagMock}
        setTagToEdit={() => {}}
      />
    );

    const removeButton = screen.getByTestId("tag-remove-button");
    fireEvent.click(removeButton);

    expect(deleteTagMock).toHaveBeenCalledWith("1");
  });

  it("shows tag edit form when clicking on tag value", () => {
    render(
      <Tag
        tag={mockTag}
        deleteTag={deleteTagMock}
        tagToEdit={mockTag.id}
        editTag={editTagMock}
        setTagToEdit={() => {}}
      />
    );
  
    const tag = screen.getByTestId("tag");
    fireEvent.click(tag);
  
    const tagEditForm = screen.getByTestId("tag-edit-form");
    expect(tagEditForm).toBeInTheDocument();
  
    const tagEditInput = screen.getByTestId("tag-edit-input");
    expect(tagEditInput).toBeInTheDocument();
  });


it("calls editTag function with tag ID and new value when submitting tag edit form ", () => {
  const newTagValue = "new value";
  render(
    <Tag
      tag={mockTag}
      deleteTag={() => {}}
      tagToEdit={mockTag.id}
      editTag={editTagMock}
      setTagToEdit={() => {}}
    />
  );
  const tagEditInput = screen.getByTestId("tag-edit-input");
  fireEvent.change(tagEditInput, { target: { value: newTagValue } });
  const tagEditForm = screen.getByTestId("tag-edit-form");
  fireEvent.submit(tagEditForm);
  expect(editTagMock).toHaveBeenCalledWith(mockTag.id, newTagValue);
});
});
