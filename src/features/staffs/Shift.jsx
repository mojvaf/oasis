import styled from "styled-components";

const StyledShift = styled.div`
  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
`;

const Day = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

function Shift({ day, value, color }) {
  return (
    <StyledShift>
      <Day>{day}</Day>
    </StyledShift>
  );
}

export default Shift;
