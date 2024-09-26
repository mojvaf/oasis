import React, { useState } from "react";
import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";
import styled from "styled-components";
import { useDeleteStaff } from "./useDeleteStaffs";
import CreateStaffForm from "./CreateStaffForm";
const StyledBorder = styled.div`
  border: 1px solid var(--color-grey-600);
`;

const Staff = ({ staffs, isLoading, setDraggingItem }) => {
  const [show, setShow] = useState(false);

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
    <>
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
            <div>
              {" "}
              <button onClick={() => setShow(!show)} disabled={isDeleting}>
                Edit
              </button>
              <button
                onClick={() => deleteStaff(item.id)}
                disabled={isDeleting}
              >
                Delete
              </button>
            </div>
          </StyledBorder>
        ))}
      </StyledStaffBox>
      {show && <CreateStaffForm />}
    </>
  );
};

export default Staff;
