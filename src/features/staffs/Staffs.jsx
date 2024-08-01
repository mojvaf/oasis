import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../services/apiStaffs";
import styled from "styled-components";
import Staff from "./staff";
import Shifts from "./Shifts";
import Spinner from "../../ui/Spinner";

const StyledStaffsLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 2.4rem;
`;

const Staffs = () => {
  const {
    isLoading,
    data: staffs,
    error,
  } = useQuery({
    queryKey: ["staffs"],
    queryFn: getStaffs,
  });

  if (isLoading) return <Spinner />;
  return (
    <StyledStaffsLayout>
      <Staff staffs={staffs} />
      <Shifts />
    </StyledStaffsLayout>
  );
};

export default Staffs;
