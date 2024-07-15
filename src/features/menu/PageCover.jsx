import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledCoverPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-400);
`;

// eslint-disable-next-line react/display-name
const PageCover = React.forwardRef((props, ref) => {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <div ref={ref} data-density="hard">
      <StyledCoverPage>
        <img src={src} />
      </StyledCoverPage>
    </div>
  );
});

export default PageCover;
