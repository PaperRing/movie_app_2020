import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
  //비동기 호출, axios 가 호출되는데 시간이 좀 걸리니까 기다리라고 말해주는 async & await
  getMovies = async () =>{
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  //render 다음으로 호출 
  componentDidMount(){
    this.getMovies();
  };
  render(){
    const { isLoading, movies } = this.state;
    return (
    <section class="container">
      {isLoading ? (
        <div class="loader">
          <span class="loader__text">Loading...</span>
        </div> 
        ) : (
          <div class="movies">
            {movies.map(movie =>(
              <Movie 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                key={movie.id} 
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
          
        )}
    </section>
    );
  }
};

export default App;