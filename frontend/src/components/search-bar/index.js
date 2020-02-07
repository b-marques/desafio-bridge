import React from "react";
import { Button, Input } from "reactstrap";

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
      <div style={{ display: "flex" }}>
        <Input
          type="search"
          name="search"
          style={{ marginRight: "0.5rem", minWidth: "300px" }}
          placeholder="Digite o nome de um repositório..."
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
