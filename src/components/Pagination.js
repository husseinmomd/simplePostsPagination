import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((nubmer) => (
          <li key={nubmer} className="page-item">
            <a onClick={() => paginate(nubmer)} href="!#" className="page-link">
              {nubmer}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
