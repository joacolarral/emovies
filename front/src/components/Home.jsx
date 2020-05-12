import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Row, Col, Image } from "react-bootstrap";
import camerafilm from "../assets/images/camerafilm.png";
import "../assets/css/home/home.modules.css";

export default ({ handleChange, handleSubmit }) => (
  <div>
    <Row className="justify-content-md-center">
      <Col md={"auto"}>
        <div style={{ paddingTop: "150px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#B0B7A6", // https://color.adobe.com/es/search?q=Jubile3&t=term
              padding: "10px",
              borderRadius: " 25px",
              border: "1px solid grey",
            
            }}
          >
            <h2>Search your favourite movie!</h2>
            <Image
              style={{ width: "120px" }}
              src={camerafilm}
              alt="camerafilm"
              roundedCircle
            />
            <Form className="inline" onSubmit={handleSubmit}>
              <Form.Control
                className="inline"
                style={{ width: "425px" }}
                name="movie"
                onChange={handleChange}
                type="text"
                placeholder="Enter movie"
              />
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
