import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledCoverPage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: baseline;
  background-color: var(--color-grey-400);
  position: relative;
  img {
    position: absolute;
    top: 20px;
    left: 20%;
  }
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
