import React from "react";
import styled from "styled-components";
import Table from "../../ui/Table";

const Img = styled.img`
  display: block;
  width: 9.4rem;
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

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export const MenuRow = ({ menu }) => {
  const { image } = menu;

  return (
    <Table>
      <Img src={image} />
    </Table>
  );
};
