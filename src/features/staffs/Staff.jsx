import React, { useState } from "react";
import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";
import styled from "styled-components";
import { useCreateStaff } from "./useCreateStaffs";

const StyledBorder = styled.div`
  border: 1px solid var(--color-grey-600);
`;

const Staff = ({ staffs, isLoading, setDraggingItem }) => {
  const { isCreating, createStaff } = useCreateStaff();

  function handleOnDrag(e) {}

  return (
    <StyledStaffBox>
      {staffs.map((st) => (
        <StyledBorder
          key={st.id}
          draggable
          onDragStart={() => setDraggingItem(st.id)}
          onDragEnd={() => setDraggingItem(null)}
        >
          <p>{st.name}</p>
          {isLoading ? <Spinner /> : <StyledCircularImage src={st.image} />}
        </StyledBorder>
      ))}
    </StyledStaffBox>
  );
};

export default Staff;
