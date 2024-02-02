import React from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ListArticles: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSearch = this.debounce(this.handleSearch.bind(this), 300);
  }

  componentDidMount() {
    this.handleSearch();
  }

  debounce(func, delay) {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  }

  handleSearch() {
    fetch(`https://hn.algolia.com/api/v1/search?query=${this.state.text}&tags=story`)
      .then(response => response.json())
      .then(data => {
        this.setState({ ListArticles: data.hits });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleChange(event) {
    this.setState({ text: event.target.value }, () => {
      this.debouncedSearch();
    });
  }

  render() {
    return (
      <div className='container'>
        <SearchHeader onSearchChange={this.handleChange} onSearchKeyUp={this.handleSearch} />
        <SearchFilters />
        <SearchResults articles={this.state.ListArticles} searchTerm={this.state.text} />
      </div>
    );
  }
}
