// necessary to import react in every component
import React, { Component } from 'react';

// new component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }


  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// exporting component to main index.js file to then be rendered
export default SearchBar;
