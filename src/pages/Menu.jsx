import React from "react";
import Row from "../ui/Row.jsx";
import Heading from "../ui/Heading.jsx";
import PageFlip from "../features/menu/PageFlip";

const Menu = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Menu</Heading>
        <PageFlip />
      </Row>
    </>
  );
};

export default Menu;
