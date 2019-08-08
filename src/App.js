import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Terms from "./components/Terms";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "reactstrap";

library.add(fab, fas);

const App = () => (
  <Fragment>
    <Header />
    <main className="my-5 py-5">
    <Container className="pt-2 pt-md-3 w-100 px-4 position-relative">
      <Row>
        <Col xs={{ order: 2}} md={{ size: 7, order: 1}} className="py-5 mb-5 py-md-0 mb-md-0">
          <Terms />
        </Col>
        <Col xs={{ order: 1}} md={{ size: 4, order: 1}} className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
          <Landing />
        </Col>
      </Row>
    </Container>
    </main>
  </Fragment>
);

export default App;
