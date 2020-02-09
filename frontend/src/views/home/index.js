import React from "react";
import Header from "../../components/header";
import RepoCard from "../../components/repo-card";
import { Row, Col, Alert } from "reactstrap";
import string_to_slug from "../../utils/slugify";
import PageChanger from "../../components/page-changer";
import "./styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: ""
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  search() {
    let name = string_to_slug(this.state.name);
    this.repoFetch(`${process.env.REACT_APP_GITHUB_API_URL}${name}`);
  }

  changePage(page) {
    let name = string_to_slug(this.state.name);
    this.repoFetch(
      `${process.env.REACT_APP_GITHUB_API_URL}${name}&page=${this.state.pages[page]}`
    );
  }

  handleChange(name) {
    this.setState({ name: name });
  }

  repoFetch(url) {
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items,
            pages: result.pages,
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
            pages: undefined
          });
        }
      );
  }

  render() {
    return (
      <div>
        <Header search={this.search} handleChange={this.handleChange} />
        <Row>
          {this.state.error ? (
            <Col className="alertBox">
              <Alert color="danger">Nome de repositório inválido!</Alert>
            </Col>
          ) : this.state.items.length === 0 && this.state.pages ? (
            <Col className="alertBox">
              <Alert color="warning">Nenhum repositório encontrado!</Alert>
            </Col>
          ) : (
            Object.keys(this.state.items).map(key => (
              <RepoCard
                key={this.state.items[key].id}
                name={this.state.items[key].name}
                author={this.state.items[key].owner.login}
                description={this.state.items[key].description}
                stars={this.state.items[key].stargazers_count}
                issues={this.state.items[key].open_issues_count}
                language={this.state.items[key].language}
                created_at={this.state.items[key].created_at}
              />
            ))
          )}
        </Row>
        {this.state.pages && this.state.items.length !== 0 && (
          <PageChanger pages={this.state.pages} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Home;
