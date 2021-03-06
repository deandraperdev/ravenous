import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"

}

class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key="{sortByOptionValue}">{sortByOption}</li>
    });
  }
}