import React, { useState } from "react";
import styled from "styled-components";
import Staff from "./Staff";
import Shifts from "./Shifts";
import Spinner from "../../ui/Spinner";
import { useStaffs } from "./useStaffs";

const Staffs = () => {
  const { isLoading, staffs } = useStaffs();
  const [draggingItem, setDraggingItem] = useState(null);

  if (isLoading) return <Spinner />;
  return (
    <div>
      <Staff
        staffs={staffs}
        isLoading={isLoading}
        setDraggingItem={setDraggingItem}
      />
      <Shifts draggingItem={draggingItem} setDraggingItem={setDraggingItem} />
    </div>
  );
};

export default Staffs;
