import { Link } from 'react-router-dom';

const Pagination = props => {
  const { blogsPerPage, totalBlogs, paginate, nextPage, prevPage, currentPage } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => prevPage()}>
            Previous
          </Link>
        </li>
        {pageNumbers.map(num => (
          <li className={`${num === currentPage ? 'active ' : ''}${'page-item'}`} key={num}>
            <Link onClick={() => paginate(num)} to="#" className="page-link">
              {num}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => nextPage()}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
