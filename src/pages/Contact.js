/** @format */

import React, { useState, useRef } from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  let [submit, setsubmit] = useState(false);


  const getData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
         emailjs
           .sendForm(
             "service_x7xz9h8",
             "template_dpdedbl",
             formRef.current,
             "user_mf3dgmN7D2NHxJM92oznJ"
           )
           .then(
             (result) => {
               console.log(result.text);
                 formRef.current.reset();
                 setValidated(false);
                 setsubmit(true);
             },
             (error) => {
               console.log(error.text);
             }
           );
    }
    setValidated(true);
    submit ? setsubmit(false) : (submit = true);
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <Container className="mt-5 col-md-8">
          {submit ? (
            <Alert variant="success">
              Thank you for getting in touch. I will respond to you very soon.{" "}
            </Alert>
          ) : (
            ""
          )}
          <Form
            noValidate
            validated={validated}
            onSubmit={getData}
            ref={formRef}
          >
            <Row className="col-md-12 m-auto">
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    size="lg"
                    name="fname"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    size="lg"
                    name="email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12} md={12} sm={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    cols={40}
                    placeholder="Your Message"
                    size="lg"
                    name="message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid message.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Col xs={6} md={3}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form>
        </Container>
      </center>
      <center>
        <p id="emailPhone">
          <a href="tel:+917897594326">📞+91 7897594326</a>{" "}
          <a
            href="mailto:abhishekkumarmishra364@gmail.com"
            target="_blank"
            id="email"
          >
            {" "}
            📧 abhishekkumarmishra364
          </a>
        </p>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Abhishek Kumar Mishra</b> using ⚛️
      </p>
    </div>
  );
};

export default Contact;
