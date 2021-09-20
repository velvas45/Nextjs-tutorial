import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

import styles from './userItem.module.css';

function UserItem({ people }) {
  const router = useRouter();

  const onLinkClick = (id) => {
    router.push(`people/${id}`);
  };

  return (
    <Col md={4} key={people.id}>
      <Card className={styles.cardLink} onClick={() => onLinkClick(people.id)}>
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
