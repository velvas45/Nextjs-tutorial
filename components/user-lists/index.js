import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserItem from '../user-item';
import CustomPagination from '../custom-pagination';

function UserLists({ peoples, funcPagination }) {
  return (
    <>
      <Row className="gy-2">
        {peoples.data.map((people) => (
          <UserItem people={people} key={people.id} />
        ))}
      </Row>
      <Row className="justify-content-end align-items-center mt-3">
        <Col md={4}>
          <CustomPagination
            active={peoples.page}
            totalPage={peoples.total_pages}
            handlePagination={funcPagination}
          />
        </Col>
      </Row>
    </>
  );
}

export default UserLists;
