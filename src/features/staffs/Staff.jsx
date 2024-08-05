import React, { useState } from "react";
import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";
import styled from "styled-components";

const StyledBorder = styled.div`
  border: 1px solid var(--color-grey-600);
`;

const Staff = ({ staffs, isLoading }) => {
  const [draggingItem, setDraggingItem] = useState(null);

  return (
    <StyledStaffBox>
      {staffs.map((st) => (
        <StyledBorder key={st.id} draggable>
          <p>{st.name}</p>
          {isLoading ? <Spinner /> : <StyledCircularImage src={st.image} />}
        </StyledBorder>
      ))}
    </StyledStaffBox>
  );
};

export default Staff;
