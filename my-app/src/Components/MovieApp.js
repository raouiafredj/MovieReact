import React, {Component}from 'react';
import ReactDom from 'react-dom';
import './MovieApp.css';
import TitleFilter from './TitleFilter';
import RatingFilter from './RatingFilter';
import MovieList from './MovieList';
import Test from './Test';
const inception ={
  id:'inception',
    title :'merveilleux',
    rating:5,
    year:2017,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Eo-tUOvpvri8hGz7qupiF9d0DAhRPAvGxOWBf_NbVVQ9hodYMg'

}
const film ={
  id:'film',
     title:'la vie scolaire',
     year:2018,
     rating:5,
     image:'http://fr.web.img5.acsta.net/c_215_290/pictures/19/07/02/10/20/5277092.jpg'


}

const movieTodisplay=[inception,film,{id:'io',title: 'IO', rating: 2, year: 2019}]



class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movie: movieTodisplay,
      titleFilter: ''
    }
  }

  addNewMovie(newMovie) {
    this.setState({
      movie: this.state.movie.concat(newMovie)
    })
  }
  getVisibleMovies() {
    return this.state.movie.filter(el => 
      el.rating >= this.state.minRatingFilter &&
      el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase()))
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
        <TitleFilter value={this.state.titleFilter}
        
        onChange={(newTitleFilter) => {
          this.setState({
            titleFilter: newTitleFilter
          })
        }} 
        
        />




          <RatingFilter 
          
          count={this.state.minRatingFilter}
          onChange={(newRating) => {
            this.setState({
              minRatingFilter: newRating
            })
          }} 
          
          
          
          
          />
        </header>
        <main className="movie-app-main">
            {/* <MovieList movie={movieTodisplay} /> */}
            <MovieList
              movie={
                this.getVisibleMovies()
              }
              
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)}/>
        </main>
      </div>
    )
  }
}

export default MovieApp;
