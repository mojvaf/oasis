import React, { useState } from "react";
import styled from "styled-components";
import { useCreateStaff } from "./useCreateStaffs";
import Row from "../../ui/Row";

const StyledText = styled.div`
  font-family: "Sono";
  font-weight: 400;
  margin: 5px;
`;
const StyledItem = styled.div`
  border: 1px solid;
  padding: 8px;
  margin: 3px;
  cursor: move;
`;

const StyledArea = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #ccc;
`;
const StyledPart = styled.div`
  opacity: 0;
`;
const Shifts = ({ draggingItem, setDraggingItem }) => {
  const { isCreating, createStaff } = useCreateStaff();
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    if (draggingItem) {
      setDroppedItems([...droppedItems, draggingItem]);
      setDraggingItem(null);
    }
  };

  return (
    <StyledArea onDragOver={handleDragOver} onDrop={handleDrop}>
      <StyledText>Shifts</StyledText>
      <Row>
        {droppedItems.map((item) => (
          <StyledItem
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
          >
            {item.name}
          </StyledItem>
        ))}
      </Row>
    </StyledArea>
  );
};

export default Shifts;
