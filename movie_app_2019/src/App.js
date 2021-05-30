import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// class App은 react component 라는걸 명시
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // movies라는 변수안에 해당 json안에 data 안에 data 안에 movies 넣기
    const {data: {data: {movies}}} = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); // movies state 변수안에 const movies 넣기
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    // const isLoading = this.state.isLoading
    const {isLoading, movies} = this.state;
    return(
      <section class="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader__text">
                Loading...
              </span>
            </div>
          ) : (
            <div className="movies">
              {
                movies.map(movie => {
                  return <Movie
                      key = {movie.id}
                      id = {movie.id}
                      year = {movie.year}
                      title = {movie.title}
                      summary = {movie.summary}
                      poster = {movie.medium_cover_image}
                      genres = {movie.genres}
                      />
                  })
              }
            </div>
      )}
      </section>

    );

  }
}

export default App;
