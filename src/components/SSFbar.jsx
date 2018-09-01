import React from "react";
import { Component } from "react";
import { Select, Input, Button } from "semantic-ui-react";
import {
  filterByLangOptions,
  filterByCountryOptions,
  sortByOptions
} from "../config";
export default class SSFbar extends Component {
  constructor(props) {
    super(props);
    this.state = { mtitle: "" };
  }
  handleTitle = e => {
    this.setState({ mtitle: e.target.value });
  };
  searchby = () => {
    this.props.searchby(this.state.mtitle);
  };
  sortby = e => {
    this.props.sortby(e);
  };
  countryfilter = e => {
    this.props.countryfilter(e);
  };
  langfilter = e => {
    this.props.langfilter(e);
  };
  render() {
    return (
      <div className="ssfbar">
        <div className="searchby">
          <h5>Search</h5>
          <Input type="text" placeholder="Enter Movie Title">
            <input onChange={this.handleTitle} />
            <Button type="submit" color="black" onClick={this.searchby}>
              Search
            </Button>
          </Input>
        </div>
        <div className="sortby">
          <h5>Sort By</h5>
          <Select
            placeholder="Sort by"
            options={sortByOptions}
            onChange={this.sortby}
          />
        </div>
        <div className="filterbylang">
          <h5>Filter By Language</h5>
          <Select
            placeholder="Filter by Language"
            options={filterByLangOptions}
            onChange={this.langfilter}
          />
        </div>
        <div className="filterbycountry">
          <h5>Filter By Country</h5>
          <Select
            placeholder="Filter by Country"
            options={filterByCountryOptions}
            onChange={this.countryfilter}
          />
        </div>
      </div>
    );
  }
}
