import React from "react";
import styled from "styled-components";
import Row from "../../ui/Row";

const capitalizeName = (name) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

const MenuTable = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const ColTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Img = styled.img`
  display: block;
  width: 5.4rem;
  object-fit: cover;
  object-position: center;
`;

const Menu = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

export const MenuRow = ({ menu }) => {
  const { image, name, ingredients, price } = menu;

  return (
    <MenuTable>
      <Img src={image} alt="food" />
      <Row>
        <ColTable>
          <Menu>{capitalizeName(name)}</Menu>
          <div>$ {price}</div>
        </ColTable>
        <Row>{ingredients}</Row>
      </Row>
    </MenuTable>
  );
};
