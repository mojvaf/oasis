import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-900);
  overflow: scroll;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const PageImage = styled.div`
  margin-bottom: 10px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const PageText = styled.div`
  margin-bottom: 10px;
`;

const PageFooter = styled.div`
  margin-top: auto;
`;

// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props, ref) => {
  return (
    <PageContainer ref={ref}>
      <PageContent>
        <PageHeader>Page header - {props.number}</PageHeader>
        {props.image && (
          <PageImage>
            <img src={props.image} alt={`Page ${props.number}`} />
          </PageImage>
        )}
        <PageText>{props.children}</PageText>
        <PageFooter>{props.number + 1}</PageFooter>
      </PageContent>
    </PageContainer>
  );
});

export default Page;
