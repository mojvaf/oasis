import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledCoverPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-400);
`;

// eslint-disable-next-line react/display-name
const EndPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-density="hard">
      <StyledCoverPage>
        <h3>End</h3>
      </StyledCoverPage>
    </div>
  );
});

export default EndPage;
