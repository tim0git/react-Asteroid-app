import React, { Component } from "react";
import AsteroidListFunc from "./AsteroidListFunc";
import axios from "axios";
import AsteroidClassGraph from "./AsteroidClassGraph";
import YearMassGraph from "./YearMassGraph";
import NextPreviousButtons from "./NextPreviousButtons";
import Typography from "@material-ui/core/Typography";
import SearchBar from "./SearchBar";

export default class DataCentre extends Component {
  state = {
    data: [],
    isLoading: true,
    top: 10,
    skip: 0,
  };

  componentDidMount() {
    this.getAsteroids();
  }

  getPrev = () => {
    console.dir("prev");
    this.setState(
      (currentState) => {
        return {
          skip: currentState.skip - 10,
        };
      },
      () => {
        this.getAsteroids();
      }
    );
  };

  getNext = () => {
    console.dir("next");
    this.setState(
      (currentState) => {
        return {
          skip: currentState.skip + 10,
        };
      },
      () => {
        this.getAsteroids();
      }
    );
  };

  render() {
    if (this.state.isLoading) return <h3>Loading</h3>;
    return (
      <div className="dataCentreContainer">
        <br />
        <Typography variant="h5" component="h3">{`Data Centre`}</Typography>
        <hr />
        <YearMassGraph data={this.state.data} />
        <br />
        <AsteroidClassGraph data={this.state.data} />
        <br />
        <NextPreviousButtons
          getNext={this.getNext}
          getPrev={this.getPrev}
          shouldHide={this.state.skip === 0}
        />
        <br />
        <SearchBar />
        <Typography
          variant="h5"
          component="h3"
        >{`Asteroid data card`}</Typography>
        <AsteroidListFunc data={this.state.data} />
      </div>
    );
  }

  getAsteroids = () => {
    axios
      .get(`https://data.nasa.gov/resource/gh4g-9sfh`, {
        params: { $limit: this.state.top, $offset: this.state.skip },
      })
      .then(({ data }) => {
        this.setState({ data: data, isLoading: false });
        // Top 10
        // https://data.nasa.gov/api/odata/v4/gh4g-9sfh?$top=10
        // mass year querie Top 10
        // V4 query https://data.nasa.gov/api/odata/v4/gh4g-9sfh?$select=mass,year&$top=10
      });
  };
}

// params: { $skip: this.state.skip, $top: 10 }
