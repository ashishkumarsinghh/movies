import React, { Component } from "react";
import seed from "../seed";
import { apiurl } from "../config";

export default class DummyComponentFetchMovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: seed, details: [], writing: true };
  }

  componentDidMount() {
    let dets = [];
    this.state.movies.forEach(movie => {
      fetch(apiurl + movie.movie_title)
        .then(res => res.json())
        .then(data => {
          dets.push(data);
        });
      this.setState({ details: dets, writing: false });
    });
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.handleGet} />
        <div className="dets">
          {this.state.writing ? <p>writing</p> : <p>{this.state.details}</p>}
        </div>
      </div>
    );
  }
}
