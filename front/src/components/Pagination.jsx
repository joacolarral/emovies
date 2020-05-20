import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

export default ({
  searchTitle,
  fetchMovieTitle,
  results,
  bool,
  changeBool,
}) => {
  const pages = Math.ceil(results / 10);
  let [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    async function paginationFetch() {
      await fetchMovieTitle(searchTitle.s, selectedPage);
    }
    !bool ? changeBool() : paginationFetch();
  }, [selectedPage]);

  function centerPage(num = 4) {
    let arr = [];

    if (pages > 5) {
      for (let i = num - 1; i <= num + 1; i++) {
        arr.push(
          <Pagination.Item
            key={i}
            active={i === selectedPage}
            onClick={() => setSelectedPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      for (let i = 1; i <= pages; i++) {
        arr.push(
          <Pagination.Item
            key={i}
            active={i === selectedPage}
            onClick={() => setSelectedPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    }

    return arr;
  }

  return (
    <Pagination style={{ justifyContent: "center", paddingTop: "10px" }}>
      {pages > 5 ? (
        <>
          <Pagination.Item
            active={1 === selectedPage}
            onClick={() => setSelectedPage(1)}
          >
            {1}
          </Pagination.Item>
          {selectedPage > 2 ? (
            <Pagination.Prev
              onClick={() =>
                selectedPage > 1 && setSelectedPage(--selectedPage)
              }
            />
          ) : (
            <Pagination.Item
              active={2 === selectedPage}
              onClick={() => setSelectedPage(2)}
            >
              {2}
            </Pagination.Item>
          )}
          {selectedPage < 5
            ? centerPage()
            : selectedPage >= pages - 3
            ? centerPage(pages - 3)
            : centerPage(selectedPage)}

          {selectedPage < pages - 1 ? (
            <Pagination.Next
              onClick={() =>
                selectedPage < pages && setSelectedPage(++selectedPage)
              }
            />
          ) : (
            <Pagination.Item
              active={selectedPage === pages - 1}
              onClick={() => setSelectedPage(pages - 1)}
            >
              {pages - 1}
            </Pagination.Item>
          )}
          <Pagination.Item
            active={pages === selectedPage}
            onClick={() => setSelectedPage(pages)}
          >
            {pages}
          </Pagination.Item>
        </>
      ) : (
        centerPage()
      )}
    </Pagination>
  );
};

/* return (<Pagination>
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item active>{4}</Pagination.Item>
    <Pagination.Item>{5}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
  </Pagination>) */
