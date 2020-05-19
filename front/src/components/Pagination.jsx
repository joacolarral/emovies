import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import styles from "../assets/css/pagination/pagination.module.css";

export default ({ results, fetchMovieTitle }) => {
  results = parseInt(results);
  const pages = Math.ceil(results / 10);
  const itemsTags = [];
  const [selectedPage, setSelectedPage] = useState(1);
  (function itemGenerator() {
    for (let i = 1; i <= pages; i++) {
      itemsTags.push(i);
    }
  })();

  function currentPage(e) {
    setSelectedPage(parseInt(e.target.getAttribute("value")));
  }
  function leftPage() {
    setSelectedPage(selectedPage - 3);
  }
  function rightPage() {
    setSelectedPage(selectedPage + 3);
  }

  useEffect(() => {
    async function fetchMovies() {
      await fetchMovieTitle("superman", selectedPage);
    }
    fetchMovies();
  }, [selectedPage]);

  const paginationFunc = () => {
    return (
      <>
        <Pagination.Item
          onClick={currentPage}
          active={selectedPage === 1}
          value={1}
        >
          1
        </Pagination.Item>
        {selectedPage <= 2 ? (
          <Pagination.Item
            onClick={currentPage}
            active={selectedPage === 2}
            value={2}
          >
            2
          </Pagination.Item>
        ) : (
          <Pagination.Prev onClick={leftPage} />
        )}
        {itemsTags.map((e) => {
          switch (true) {
            case selectedPage < 5 && e > 2 && e < 6: {
              return (
                <Pagination.Item
                  value={e}
                  onClick={currentPage}
                  active={selectedPage === e}
                >
                  {e}
                </Pagination.Item>
              );
            }
            case selectedPage > pages - 4 && e > pages - 4 && e < pages - 1: {
              return (
                <Pagination.Item
                  value={e}
                  onClick={currentPage}
                  active={selectedPage === e}
                >
                  {e}
                </Pagination.Item>
              );
            }
            case selectedPage - 1 <= e && selectedPage + 1 >= e: {
              if (e > 2 && e < pages - 1) {
                return (
                  <Pagination.Item
                    value={e}
                    onClick={currentPage}
                    active={selectedPage === e}
                  >
                    {e}
                  </Pagination.Item>
                );
              }
            }
          }
        })}
        {selectedPage >= pages - 1 ? (
          <Pagination.Item
            value={pages - 1}
            onClick={currentPage}
            active={selectedPage === pages - 1}
          >
            {pages - 1}
          </Pagination.Item>
        ) : (
          <Pagination.Next onClick={rightPage} />
        )}
        <Pagination.Item
          value={pages}
          onClick={currentPage}
          active={selectedPage === pages}
        >
          {pages}
        </Pagination.Item>
      </>
    );
  };

  return (
    <Pagination className={styles.pagination}>
      {pages < 6
        ? itemsTags.map((e) => (
            <Pagination.Item
              value={e}
              onClick={currentPage}
              active={selectedPage === e}
            >
              {e}
            </Pagination.Item>
          ))
        : paginationFunc()}
    </Pagination>
  );
};
