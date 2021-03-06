/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/White_Hackbout.png";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-center">
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("assets/img/logos/hbLogo1.png")}
                alt="white_logo"
                style={{
                  height: "50px",
                  textAlign: "center",
                  display: "block",
                  margin: "10px auto"
                }}
              ></img>
              <p>HackBout© {new Date().getFullYear()}</p>
              <p>
                Made With{" "}
                <span>
                  <i
                    className="fas fa-heart img-fluid"
                    style={{ color: "red" }}
                  ></i>
                </span>{" "}
                By Hack Club Nmit
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
