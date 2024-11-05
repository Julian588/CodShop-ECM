function Pagination({ currentPage, handleClickNext, handleClickPrev }) {
  return (
    <div className="pagination-container">
      <button type="button" className="prev-btn btn" onClick={handleClickPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <span className="pagination">{`${currentPage + 1}`}</span>
      <button type="button" className="next-btn btn" onClick={handleClickNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
