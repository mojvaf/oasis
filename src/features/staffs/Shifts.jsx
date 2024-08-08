import React, { useState } from "react";
import Shift from "./Shift";
import styled from "styled-components";

const StyledDropArea = styled.div`
  width: 100%;
  height: 200px;
  background-color: aquamarine;
  opacity: 1;
  transition: all 0.3s ease-in-out;
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
  const [showDrop, setShowDrop] = useState(false);

  const handleDrop = () => {
    console.log(`Dropped item with id: ${draggingItem}`);
    // Handle the drop logic here, such as updating state or making an API call
    setShowDrop(false);
    setDraggingItem(null);
  };

  return (
    <StyledArea
      onDragEnter={() => setShowDrop(true)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
    >
      {showDrop ? <StyledDropArea /> : <StyledPart />}
      <p>drop part</p>
    </StyledArea>
  );
};

export default Shifts;
