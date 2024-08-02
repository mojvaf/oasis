import React from "react";
import styled from "styled-components";
import Staff from "./staff";
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

  if (isLoading) return <Spinner />;
  return (
    <StyledStaffsLayout>
      <Staff staffs={staffs} isLoading={isLoading} />
      <Shifts />
    </StyledStaffsLayout>
  );
};

export default Staffs;
