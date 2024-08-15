import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useShifts } from "./useShifts";

const StyledArea = styled.div`
  border: 2px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
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
  justify-content: space-evenly;
`;

const StyledItem = styled.div`
  border: 1px solid var(--color-grey-100);
  padding: 8px;
  margin-bottom: 4px;
  cursor: move;
`;

const StyledDays = styled.div`
  border: 1px dashed var(--color-grey-600);
  padding: 8px;
  margin: 0 4px;
  min-width: 100px;
  min-height: 100px;
`;

const Shifts = ({ draggingItem, setDraggingItem }) => {
  const [droppedItems, setDroppedItems] = useState({});
  const { isLoading, shifts } = useShifts();

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
      toast.success("The staff has been added to the shift.");
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
          <StyledDays
            key={day}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(day)}
          >
            {format(new Date(day), "eee, MMM d")}
            <ul>
              {(droppedItems[day] || []).map((item) => (
                <StyledItem
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item)}
                >
                  {item.name}
                </StyledItem>
              ))}
            </ul>
          </StyledDays>
        ))}
      </Row>
    </StyledArea>
  );
};

export default Shifts;
