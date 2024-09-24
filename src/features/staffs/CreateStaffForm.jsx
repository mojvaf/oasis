import React from "react";
import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useCreateStaff } from "./useCreateStaffs";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";
import { parse, isValid, getDay } from "date-fns";

export const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
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

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    createStaff({ ...data, image: data.image[0] });
    reset();
  }

  function onError(err) {
    console.log(err);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label={"availability"} error={errors?.availability?.message}>
        <Input
          type="text"
          id="availability"
          {...register("availability", {
            required: "This field is required",
            //validate: (value) => value,
          })}
        />
      </FormRow>
      <FormRow label={"startShift"} error={errors?.startShift?.message}>
        <Input
          type="number"
          id="startShift"
          {...register("startShift", {
            required: "This field is required",
            min: {
              value: 8,
              message: "shift should start at 8 am or later",
            },
          })}
        />
      </FormRow>
      <FormRow label={"endShift"} error={errors?.endShift?.message}>
        <Input
          type="number"
          id="endShift"
          {...register("endShift", {
            required: "This field is required",
            //validate: (value) =>
            //  value < getValues.startShift || "add more hours",
            // min: {
            // value: 12,
            // message: "shift should be at least end at 12",
            //},
          })}
        />
      </FormRow>
      <FormRow error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow>
        <Button>Create a new staff</Button>
      </FormRow>
    </Form>
  );
};

export default CreateStaffForm;
