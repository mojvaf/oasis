import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  background-color: var(--color-grey-200);
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/pearls.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
