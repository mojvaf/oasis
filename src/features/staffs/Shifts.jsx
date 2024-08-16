import React, { useState } from "react";
import { format, addDays, startOfWeek, parseISO } from "date-fns";
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
  border-bottom: 1px solid var(--color-grey-400);
  padding: 8px;
  margin-bottom: 4px;
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
  console.log(draggingItem);
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfWeek(new Date()), i), "yyyy-MM-dd")
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dateString) => {
    const dayName = format(parseISO(dateString), "EEEE");

    if (draggingItem && draggingItem.availability) {
      const availableDays = draggingItem.availability
        .split(",")
        .map((d) => d.trim());

      // Check if the dayName is in the availableDays array
      if (availableDays.includes(dayName)) {
        // Check if draggingItem is already in the list for the specified day
        setDroppedItems((prev) => {
          const currentItems = prev[dateString] || [];

          // Check if draggingItem already exists in the list
          const itemAlreadyAdded = currentItems.some(
            (item) => item.id === draggingItem.id
          );

          if (itemAlreadyAdded) {
            toast.error(
              "This staff is already assigned to the shift for this day."
            );
            return prev;
          } else {
            toast.success("The staff has been added to the shift.");
          }

          return {
            ...prev,
            [dateString]: [...currentItems, draggingItem],
          };
        });
      } else {
        toast.error(
          "The staff cannot be added to the shift due to availability issues."
        );
      }
    } else {
      toast.error(
        "Unable to add the staff due to missing availability information."
      );
    }
    setDraggingItem(null);
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
                <StyledItem key={item.id}>
                  {item.name}&apos;s shift
                  <div>starts at: {item.startShift} AM</div>
                  <div>ends at: {item.endShift}PM</div>
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
