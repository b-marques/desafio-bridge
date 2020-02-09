import React from "react";
import { Button, Input } from "reactstrap";
import "./styles.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  search() {
    this.props.search();
  }

  render() {
    return (
      <div className="inputContainer">
        <Input
          className="input"
          type="search"
          name="search"
          placeholder="Digite o nome do repositório..."
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.search();
            }
          }}
          onChange={this.handleChange}
        />
        <Button onClick={this.search}>Buscar</Button>
      </div>
    );
  }
}

export default SearchBar;
