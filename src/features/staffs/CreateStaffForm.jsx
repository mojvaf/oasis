import React from "react";
import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useCreateStaff } from "./useCreateStaffs";

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
  const { isCreating, createStaff } = useCreateStaff();

  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    createStaff(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Staff Name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="availability">Availability</Label>
        <Input
          type="text"
          id="availability"
          {...register("availability", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="startShift">Start Shift</Label>
        <Input
          type="number"
          id="startShift"
          {...register("startShift", {
            required: "This field is required",
            min: {
              value: 8,
              message: "shift should be at least start at 8",
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="endShift">End Shift</Label>
        <Input
          type="number"
          id="endShift"
          {...register("endShift", {
            required: "This field is required",
            min: {
              value: 8,
              message: "shift should be at least end at 12",
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Button>Create a new staff</Button>
      </FormRow>
    </Form>
  );
};

export default CreateStaffForm;
