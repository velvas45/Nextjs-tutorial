import { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Row, Col, Form } from 'react-bootstrap';
import { getDummyData, getFilteredEvents } from '../../data/people';
import UserLists from '../../components/user-lists';

function HomePage() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    setPeoples(getDummyData());
  }, []);

  const filterPeople = (e) => {
    const inputData = e.target.value;

    // filter data
    const filteredData = getFilteredEvents(inputData);

    // change state
    setPeoples(filteredData);
  };

  return (
    <Layout>
      <Row className="justify-content-md-center my-3">
        <Col md="8" className="text-center">
          <h3>Info User Random: </h3>
        </Col>
      </Row>
      <Row className="justify-content-md-end mb-3">
        <Col md={6}>
          <Form.Control placeholder="Alexandro.." onChange={filterPeople} />
        </Col>
      </Row>
      {peoples.length > 0 && <UserLists peoples={peoples} />}
    </Layout>
  );
}

export default HomePage;
