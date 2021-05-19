import React, { Component } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';


class Home extends Component {
  constructor(props){
      super(props)
      this.state = {}
  }

  componentDidMount(){
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=dd073e56f8e18f35e55f427502bbfabc')
          .then(res => res.json())
          .then(res => this.setState({movies: res}))
  }
// go back an unpack movie props
  render(){
      return(
        this.state.movies ?
        this.state.movies.results.map(movie => <MovieCard {...movie}/>) : <h1>No Movies</h1>
      );
  }
}

export default Home;
