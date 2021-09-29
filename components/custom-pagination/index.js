import React from 'react';
import { Pagination } from 'react-bootstrap';

function CustomPagination({ active = 1, totalPage, handlePagination }) {
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default CustomPagination;
