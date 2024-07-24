import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Button from "../../ui/Button";
import PageCover from "./PageCover";
import EndPage from "./EndPage";
import Page from "./Page";
import styled from "styled-components";

const StyledFlip = styled.div`
  height: 52vh;
  display: "flex";
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PageFlip = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [orientation, setOrientation] = useState("");
  const [state, setState] = useState("");
  const flipBook = useRef(null);

  useEffect(() => {
    if (flipBook.current) {
      setTotalPage(flipBook.current.pageFlip());
    }
  }, []);

  const nextButtonClick = () => {
    flipBook.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  const onChangeOrientation = (e) => {
    setOrientation(e.data);
  };

  const onChangeState = (e) => {
    setState(e.data);
  };

  return (
    <>
      <StyledFlip>
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={315}
          maxWidth={100}
          minHeight={400}
          maxHeight={153}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          onChangeOrientation={onChangeOrientation}
          onChangeState={onChangeState}
          className="demo-book"
          ref={flipBook}
        >
          <PageCover></PageCover>
          <Page number={1}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          <EndPage></EndPage>
        </HTMLFlipBook>
      </StyledFlip>
      <div>
        <div>
          <Button type="button" onClick={prevButtonClick}>
            Previous page
          </Button>
          <span>{"   "}</span>
          <Button type="button" onClick={nextButtonClick}>
            Next page
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageFlip;
