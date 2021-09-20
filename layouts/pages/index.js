import { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Row, Col, Form, Button, Modal, Toast } from 'react-bootstrap';
import UserLists from '../../components/user-lists';

import { API } from '../../configs';

function HomePage({ peoples, funcFilter }) {
  // const [peoples, setPeoples] = useState([]);
  const [show, setShow] = useState(false);
  const [postPeople, setPostPeople] = useState({
    name: '',
    job: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChangeInput = (e) => {
    setPostPeople((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi / validation
    if (
      postPeople.name.trim() != '' ||
      postPeople.job.trim() != '' ||
      postPeople.name.length > 0 ||
      postPeople.job.length > 0 ||
      postPeople.name !== '' ||
      postPeople.job !== ''
    ) {
      // post ke api reqres
      try {
        const response = await API.methodPost(postPeople);
        if (response.status == '201') {
          setShowSuccess(true);
          setShow(false);
        } else {
          console.log('gagal');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('error');
    }
  };

  // useEffect(() => {
  //   setPeoples(getDummyData());
  // }, []);

  // const filterPeople = (e) => {
  //   const inputData = e.target.value;

  //   // filter data
  //   const filteredData = getFilteredEvents(inputData);

  //   // change state
  //   setPeoples(filteredData);
  // };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSuccessToast = () => setShowSuccess(!showSuccess);

  return (
    <Layout>
      <Row className="justify-content-md-center my-3">
        <Col md="8" className="text-center">
          <h3>Info User Random: </h3>
        </Col>
      </Row>

      {/* success toast after post data */}
      <Toast className="mb-4" show={showSuccess} onClose={toggleSuccessToast}>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body className="text-success">
          Woohooo, you're data has been saved!
        </Toast.Body>
      </Toast>

      {!showSuccess && (
        <Row className="justify-content-md-between mb-3">
          <Col md={5}>
            <Button variant="primary" onClick={handleShow}>
              Add User
            </Button>
          </Col>
          <Col md={5}>
            <Form.Control placeholder="Alexandro.." onChange={funcFilter} />
          </Col>
        </Row>
      )}
      {peoples.length > 0 && <UserLists peoples={peoples} />}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChangeInput}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="jobInput">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                name="job"
                onChange={handleChangeInput}
                placeholder="Enter job"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}

export default HomePage;
