import React from "react";
import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

export const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`;

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const CreateStaffForm = () => {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="name">Staff Name</Label>
        <Input type="text" id="name" />
      </FormRow>
      <FormRow>
        <Label htmlFor="availability">Availability</Label>
        <Input type="text" id="availability" />
      </FormRow>
      <FormRow>
        <Label htmlFor="startShift">Start Shift</Label>
        <Input type="text" id="startShift" />
      </FormRow>
      <FormRow>
        <Label htmlFor="endShift">End Shift</Label>
        <Input type="text" id="endShift" />
      </FormRow>
    </Form>
  );
};

export default CreateStaffForm;
