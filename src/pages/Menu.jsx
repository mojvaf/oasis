import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading.jsx";
import PageFlip from "../features/menu/PageFlip";

const Menu = () => {
  return (
    <>
      <Heading as="h1">The Wild Oasis menu</Heading>
      <PageFlip />
    </>
  );
};

export default Menu;
