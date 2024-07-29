import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Button from "../../ui/Button";
import PageCover from "./PageCover";
import EndPage from "./EndPage";
import Page from "./Page";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../../services/apiMenus";
import Spinner from "../../ui/Spinner";
import { MenuRow } from "./MenuRow";

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

  const {
    isLoading,
    error,
    data: menus,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
  });

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

  if (isLoading) return <Spinner />;

  const filteredMain = menus.filter((item) => item.type === "main");
  const filteredAppetizer = menus.filter((item) => item.type === "appetizers");
  const filteredDesserts = menus.filter((item) => item.type === "desserts");
  const filteredBeverages = menus.filter((item) => item.type === "beverages");

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

          <Page number={"Appetizers"}>
            {filteredAppetizer.map((menu) => (
              <MenuRow key={menu.id} menu={menu} />
            ))}
          </Page>
          <Page number={"Main"}>
            {filteredMain.map((menu) => (
              <MenuRow key={menu.id} menu={menu} />
            ))}
          </Page>
          <Page number={"Desserts"}>
            {" "}
            {filteredDesserts.map((menu) => (
              <MenuRow key={menu.id} menu={menu} />
            ))}
          </Page>
          <Page number={"Beverages"}>
            {filteredBeverages.map((menu) => (
              <MenuRow key={menu.id} menu={menu} />
            ))}
          </Page>
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
