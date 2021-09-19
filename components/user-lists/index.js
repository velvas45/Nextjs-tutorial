import React from 'react';
import { Row } from 'react-bootstrap';
import UserItem from '../user-item';

function UserLists({ peoples }) {
  return (
    <Row className="gy-2">
      {peoples.map((people) => (
        <UserItem people={people} key={people.id} />
      ))}
    </Row>
  );
}

export default UserLists;
