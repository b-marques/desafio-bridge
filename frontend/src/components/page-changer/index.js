import React from "react";
import { Button, Row, Col } from "reactstrap";
import "./styles.css";

const PageChanger = props => {
  return (
    <Row className="justify-content-center">
      <Col className="btnPageChange" md="auto">
        <Button
          color="secondary"
          disabled={props.pages.first === undefined}
          onClick={() => props.changePage("first")}
        >{`Primeira <<`}</Button>
      </Col>
      <Col className="btnPageChange" md="auto">
        <Button
          color="secondary"
          disabled={props.pages.prev === undefined}
          onClick={() => props.changePage("prev")}
        >{`Anterior <`}</Button>
      </Col>
      <Col className="btnPageChange" md="auto">
        <Button
          color="secondary"
          disabled={props.pages.next === undefined}
          onClick={() => props.changePage("next")}
        >{`Próxima >`}</Button>
      </Col>
      <Col className="btnPageChange" md="auto">
        <Button
          color="secondary"
          disabled={props.pages.last === undefined}
          onClick={() => props.changePage("last")}
        >{`Última >>`}</Button>
      </Col>
    </Row>
  );
};

export default PageChanger;
