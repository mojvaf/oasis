import React, { useState } from "react";
import styled from "styled-components";
import Staff from "./Staff";
import Shifts from "./Shifts";
import Spinner from "../../ui/Spinner";
import { useStaffs } from "./useStaffs";

const StyledStaffsLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.4rem;
`;

const Staffs = () => {
  const { isLoading, staffs } = useStaffs();
  const [draggingItem, setDraggingItem] = useState(null);

  if (isLoading) return <Spinner />;
  return (
    <StyledStaffsLayout>
      <Staff
        staffs={staffs}
        isLoading={isLoading}
        setDraggingItem={setDraggingItem}
      />
      <Shifts draggingItem={draggingItem} setDraggingItem={setDraggingItem} />
    </StyledStaffsLayout>
  );
};

export default Staffs;
