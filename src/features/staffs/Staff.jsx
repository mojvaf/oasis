import React from "react";
import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";
import styled from "styled-components";
import { useDeleteStaff } from "./useDeleteStaffs";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

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

  const { isDeleting, deleteStaff } = useDeleteStaff();

  return (
    <Row type="verticalAndLeft">
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
            <button onClick={() => deleteStaff(item.id)} disabled={isDeleting}>
              Delete
            </button>
          </StyledBorder>
        ))}
      </StyledStaffBox>
      <Button variation="primary">Add a new staff</Button>
    </Row>
  );
};

export default Staff;
