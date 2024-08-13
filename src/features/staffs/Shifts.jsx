import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import styled from "styled-components";

const StyledArea = styled.div`
  border: 2px dashed #ccc;
  padding: 16px;
  min-height: 100px;
  text-align: center;
  margin-bottom: 16px;
`;

const StyledText = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledItem = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 4px;
  cursor: move;
`;

const Shifts = ({ draggingItem, setDraggingItem }) => {
  const [droppedItems, setDroppedItems] = useState({});

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfWeek(new Date()), i), "yyyy-MM-dd")
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (day) => {
    if (draggingItem) {
      setDroppedItems((prev) => ({
        ...prev,
        [day]: [...(prev[day] || []), draggingItem],
      }));
      setDraggingItem(null);
    }
  };

  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  return (
    <StyledArea>
      <StyledText>Shifts</StyledText>
      <Row>
        {daysOfWeek.map((day) => (
          <div
            key={day}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(day)}
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              margin: "0 4px",
              minWidth: "100px",
              minHeight: "100px",
            }}
          >
            {format(new Date(day), "eee, MMM d")}
            <ul>
              {(droppedItems[day] || []).map((item) => (
                <StyledItem
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item)}
                >
                  {item.name} {/* Adjust based on your data structure */}
                </StyledItem>
              ))}
            </ul>
          </div>
        ))}
      </Row>
    </StyledArea>
  );
};

export default Shifts;
