import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import formatDate from "../../utils/formatDate";
import "./styles.css";

class RepoCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.fetchUserRepos = this.fetchUserRepos.bind(this);
    this.state = { collapse: false, user_repos: undefined };
  }

  fetchUserRepos() {
    fetch(
      `${process.env.REACT_APP_GITHUB_USER_REPOS_API_URL}${this.props.author}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            user_repos: result,
            error: false
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
            user_repos: undefined
          });
        }
      );
  }

  toggle() {
    if (this.state.user_repos === undefined) {
      this.fetchUserRepos();
    }
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Col lg="12" xl={{ size: 10, offset: 1 }}>
        <Card className="card">
          <CardHeader className="cardHeader" onClick={() => this.toggle()}>
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
              <Row>
                <Col sm="6">
                  <strong>Linguagem:</strong> {this.props.language}
                </Col>
                <Col className="text-right" xs="auto">
                  <strong>Criado em: </strong>
                  {formatDate(this.props.created_at)}
                </Col>
                <Col sm="6">
                  <strong>Outros repositórios:</strong>
                  <br />
                  {this.state.user_repos && (
                    <ListGroup>
                      {Object.keys(this.state.user_repos).map(key => (
                        <ListGroupItem key={key}>
                          {this.state.user_repos[key].name}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  )}
                </Col>
                <Col className="text-right" xs="auto">
                  <strong>Número de issues abertas:</strong> {this.props.issues}
                </Col>
              </Row>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    );
  }
}

export default RepoCard;
