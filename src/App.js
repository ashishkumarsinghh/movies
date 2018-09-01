import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import seed from "./seed";
import MovieDeck from "./components/MovieDeck";
import Header from "./components/Header";
import SSFbar from "./components/SSFbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: seed,
      loading: true,
      lf: "",
      cf: "",
      st: "",
      sb: "budget",
      filtered: [],
      details: []
    };
  }

  // getMovieData() {
  //   let dets = [];
  //   this.state.movies.map(movie => {
  //     fetch(apiurl + this.props.movie.movie_imdb_link.substring(26, 35))
  //       .then(response => {
  //         response.json().then(data => dets.push(data));
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         dets.push(null);
  //       });
  //   });
  //   this.setState({ details: dets });
  // }
  componentDidMount() {
    this.setState({ movies: seed, filtered: seed, loading: false });
  }

  langfilter = e => {
    let lfmovies = this.state.movies.filter(movie => {
      if (movie.language === e.target.textContent) {
        return true;
      }
      return false;
    });
    this.setState({ lf: e.target.textContent, filtered: lfmovies });
  };
  countryfilter = e => {
    let cfmovies = this.state.movies.filter(movie => {
      if (movie.country === e.target.textContent) {
        return true;
      }
      return false;
    });
    this.setState({ cf: e.target.textContent, filtered: cfmovies });
  };
  searchby = e => {
    let smovies = this.state.movies.filter(movie => {
      if (movie.movie_title.toLowerCase().includes(e.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.setState({ st: e.toLowerCase(), filtered: smovies });
  };
  sortby = e => {
    if (e.target.textContent.toLowerCase() === "year") {
      let sortedmovies = this.state.filtered.sort((movie1, movie2) => {
        return (
          parseInt(movie2.title_year, 10) - parseInt(movie1.title_year, 10)
        );
      });
      this.setState({ sb: e.target.textContent, filtered: sortedmovies });
    } else if (e.target.textContent.toLowerCase() === "popularity") {
      let sortedmovies = this.state.filtered.sort((movie1, movie2) => {
        return parseInt(movie2.budget, 10) - parseInt(movie1.budget, 10);
      });
      this.setState({ sb: e.target.textContent, filtered: sortedmovies });
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <SSFbar
            sortby={this.sortby}
            langfilter={this.langfilter}
            countryfilter={this.countryfilter}
            searchby={this.searchby}
          />
          {!this.state.loading && <MovieDeck movies={this.state.filtered} />}
        </Container>
      </div>
    );
  }
}

export default App;
