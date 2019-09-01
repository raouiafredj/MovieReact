import React, {Component} from "react";
import TitleFilter from './TitleFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'


class MoviesApp extends Component {
  
    
    render() {
      return (
        <div className="movie-app">
          <header className="movie-app-header">
            <TitleFilter />
            <RatingFilter />
          </header>
          <main className="movie-app-main">
              <MovieList />
          </main>
        </div>
      )
    }
  }
  
  export default MoviesApp;
  