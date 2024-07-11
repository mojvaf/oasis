import React, { useEffect, useRef } from "react";
import { HTMLFlipBook } from "page-flip";
import styled from "styled-components";

const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const PageFlipBook = styled.div`
  width: 300px;
  height: 500px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid #ccc;
`;

const PageContent = styled.div`
  padding: 20px;
  font-size: 18px;
`;

const PageFlip = () => {
  const bookRef = useRef(null);
  const pages = [
    { id: 1, content: "Page 1 content" },
    { id: 2, content: "Page 2 content" },
    { id: 3, content: "Page 3 content" },
    { id: 4, content: "Page 4 content" },
  ];

  useEffect(() => {
    if (bookRef.current) {
      const book = new PageFlip(bookRef.current, {
        width: 300,
        height: 500,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
      });

      pages.forEach((page) => {
        const pageElement = document.createElement("div");
        pageElement.innerHTML = `<div class="page-content">${page.content}</div>`;
        book.loadFromHTML([pageElement]);
      });

      return () => {
        book.destroy();
      };
    }
  }, [pages]);

  return (
    <BookContainer>
      <PageFlipBook ref={bookRef}>
        {pages.map((page) => (
          <Page key={page.id}>
            <PageContent>{page.content}</PageContent>
          </Page>
        ))}
      </PageFlipBook>
    </BookContainer>
  );
};

export default PageFlip;
