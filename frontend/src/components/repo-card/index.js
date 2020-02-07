import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Collapse,
  Row,
  Col
} from "reactstrap";

class RepoCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Col lg="12" xl={{ size: 10, offset: 1 }}>
        <Card style={{ marginBottom: "0.2rem" }}>
          <CardHeader onClick={this.toggle} style={{ margin: "0rem" }}>
            <Row>
              <Col sm="6">
                <strong>Repositório:</strong> {this.props.name}
              </Col>
              <Col className="text-right" xs="auto">
                <strong>Autor:</strong> {this.props.author}
              </Col>
              <Col sm="6">
                <strong>Descrição:</strong> {this.props.description}
              </Col>
              <Col className="text-right" xs="auto">
                <strong>Stars:</strong> {this.props.stars}
              </Col>
            </Row>
          </CardHeader>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    );
  }
}

export default RepoCard;
