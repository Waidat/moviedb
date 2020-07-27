import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null

    }

    console.log("api..", process.env.REACT_APP_API);
    this.apiKey = "76406eec8ac18347fb7bcfef7f35ed68";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log("data", data);
        this.setState({ movies: [...data.results], totalResults: data.total_results })
      })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nexPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        console.log("data", data);
        this.setState({ movies: [...data.results], currentPage: pageNumber })
      })

  }

  viewMovieInfo = (id) => {


    const filteredMovie = this.state.movies.filter(movie => movie.id == id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie })

  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {

    const numberPages = Math.floor(this.state.totalResults / 20);


    return (
      <div className="App">
        <Nav />
        {
          this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}></SearchArea>
          <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}></MovieList></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie}></MovieInfo> }
        {
          this.state.totalResults > 20 &&  this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nexPage} currentPage={this.state.currentPage}></Pagination>
            : ''
        }
      </div>
    );
  }
}

export default App;
