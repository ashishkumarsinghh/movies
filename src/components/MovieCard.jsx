import { Grid, Card, Icon } from "semantic-ui-react";

import React, { Component } from "react";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "" };
  }

  componentDidMount() {
    // fetch(apiurl + this.props.movie.movie_imdb_link.substring(26, 35))
    //   .then(response => {
    //     response
    //       .json()
    //       .then(data => this.setState({ img: data.Search[0].Poster }));
    //   })
    //   .catch(e => {
    //     console.log(e);
    //     this.setState({ img: "https://picsum.photos/400/400/random" });
    //   });
  }
  extra = (
    <div>
      <h5>Directed By : {this.props.movie.director_name}</h5>
      {this.props.movie.actor_1_name + ", " + this.props.movie.actor_2_name}
      <p>
        <Icon name="calendar alternate outline" />
        {this.props.movie.title_year
          ? this.props.movie.title_year
          : "Not Known"}{" "}
        &nbsp;&nbsp;
        <Icon name="dollar sign" />
        {this.props.movie.budget ? this.props.movie.budget : "Not Known"}
      </p>
    </div>
  );
  render() {
    return (
      <Grid.Column>
        <Card
          image="https://picsum.photos/400/400/?random"
          header={this.props.movie.movie_title}
          extra={this.extra}
        />
      </Grid.Column>
    );
  }
}
