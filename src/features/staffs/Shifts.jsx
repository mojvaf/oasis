import React from "react";
import Shift from "./Shift";
import styled from "styled-components";

const Shifts = () => {
  return (
    <>
      <Shift day="Monday" color="blue"></Shift>
      <Shift day="Tuesday" color="blue"></Shift>
      <Shift day="Wednesday" color="blue"></Shift>
      <Shift day="Thursday" color="blue"></Shift>
      <Shift day="Friday" color="blue"></Shift>
      <Shift day="Saturday" color="blue"></Shift>
      <Shift day="Sunday" color="blue"></Shift>
    </>
  );
};

export default Shifts;
