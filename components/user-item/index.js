import React from 'react';
import { Col, Card } from 'react-bootstrap';

function UserItem({ people }) {
  return (
    <Col md={4} key={people.id}>
      <Card>
        <Card.Img variant="top" src={people.avatar} />
        <Card.Body>
          <Card.Title>
            {people.first_name} {people.last_name}
          </Card.Title>
          <Card.Text>{people.email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserItem;
