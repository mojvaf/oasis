import styled from "styled-components";

export const StyledStaffBox = styled.div`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  justify-content: space-around;
  display: flex;
  p {
    text-align: center;
  }
`;

export const StyledCircularImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-grey-200);
  transition: transform 0.3s ease, background-color 0.5s ease-in-out;
`;
