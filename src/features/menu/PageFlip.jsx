import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import Button from "../../ui/Button";
// eslint-disable-next-line react/display-name
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="bg-gray-400" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>Menu</h2>
      </div>
    </div>
  );
});

// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

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
      <HTMLFlipBook
        width={30}
        height={50}
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
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        {/* ... */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
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
