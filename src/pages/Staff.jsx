import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Staffs from "../features/staffs/Staffs";

export const Staff = () => {
  return (
    <Row>
      <Heading as="h1">All staffs and shifts</Heading>
      <Staffs />
    </Row>
  );
};
