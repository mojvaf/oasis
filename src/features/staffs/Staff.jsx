import React from "react";
import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";
import styled from "styled-components";

const StyledBorder = styled.div`
  border: 1px solid var(--color-grey-600);
`;

const Staff = ({ staffs, isLoading, setDraggingItem }) => {
  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    setDraggingItem(null);
  };

  return (
    <StyledStaffBox>
      {staffs.map((item) => (
        <StyledBorder
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p>{item.name}</p>
          {isLoading ? <Spinner /> : <StyledCircularImage src={item.image} />}
        </StyledBorder>
      ))}
    </StyledStaffBox>
  );
};

export default Staff;
