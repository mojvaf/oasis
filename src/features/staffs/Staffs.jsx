import React, { useState } from "react";
import styled from "styled-components";
import Staff from "./Staff";
import Shifts from "./Shifts";
import Spinner from "../../ui/Spinner";
import { useStaffs } from "./useStaffs";
import Button from "../../ui/Button";
import CreateStaffForm from "./CreateStaffForm";

const Staffs = () => {
  const { isLoading, staffs } = useStaffs();
  const [draggingItem, setDraggingItem] = useState(null);
  const [open, setOpen] = useState(false);

  if (isLoading) return <Spinner />;
  return (
    <>
      <div>
        <Staff
          staffs={staffs}
          isLoading={isLoading}
          setDraggingItem={setDraggingItem}
        />
        <Shifts draggingItem={draggingItem} setDraggingItem={setDraggingItem} />
        <Button variation="primary" onClick={() => setOpen(!open)}>
          Add a new staff
        </Button>
        {open && <CreateStaffForm />}
      </div>
    </>
  );
};

export default Staffs;
