import { next } from "assets";

import { DOTS, usePagination } from "hooks";

import type { FC } from "react";
type Props = {
  className: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  setPageSize: Function;
  onPageChange: Function;
  siblingCount?: number;
};

const Pagination: FC<Props> = ({
  className,
  currentPage,
  totalCount,
  pageSize,
  setPageSize,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      <div className="showing">
        <p>Showing</p>
        <select onChange={(e) => setPageSize(e.target.value)} defaultValue={10}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={100}>100</option>
        </select>
        <p>out of {totalCount}</p>
      </div>

      <div className="label">
        <button onClick={onPrevious} className="" disabled={currentPage === 1}>
          <img src={next} alt="arrow" className="icon" />
        </button>
        <div className="page-count">
          {paginationRange.map((pageNumber, key) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <div key={key} className="pagination-item">
                  &#8230;
                </div>
              );
            }

            return (
              <div
                key={key}
                className={`${
                  currentPage === pageNumber && "active"
                } page-number`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </div>
            );
          })}
        </div>
        <button
          onClick={onNext}
          className=""
          disabled={currentPage === lastPage}
        >
          <img src={next} alt="arrow" className="icon rotate" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

