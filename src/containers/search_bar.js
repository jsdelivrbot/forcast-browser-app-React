import React, { Component } from 'react';

export default class SearchBar extends Component {
  //setting up the state
  constructor(props) {
    super(props);

    //initilize state
    this.state = { term: "" };

    //we need to "bind the context" to 'this' in order to make it work.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    //setting state when we write in the input-group
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form className="input-group">

        <input
          placeholder="Get a five-day forcase in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
