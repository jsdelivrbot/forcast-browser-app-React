import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  //setting up the state
  constructor(props) {
    super(props);

    //initilize state
    this.state = { term: "" };


    //if we have a callback, that has a reference to 'this' then we need to bind
    //we need to "bind the context" to 'this' in order to make it work.
    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //setting state when we write in the input-group
    this.setState({ term: event.target.value });
  }


  onFormSubmit(event) {
    event.preventDefault();

    //we need to go fetch weather data.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">

        <input
          placeholder="Get a five-day forcast in your favorite cities"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//pass in null for the first argument because mapDispatchToProps needs to be the second argument
//first argument is for state, which we dont need there.
export default connect(null, mapDispatchToProps)(SearchBar);
