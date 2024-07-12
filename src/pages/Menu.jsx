import React from "react";
import Row from "../ui/Row.jsx";
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
