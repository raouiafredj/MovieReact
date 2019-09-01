import React from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = ({movies = [], onAddMovie = () => {}}) => (
     <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <div
            className="new-movie-card"
            onClick={ onAddMovie} >
                {/* id: Math.random(),
                title: prompt('movie title: '),
                rating: Number(prompt('movie rating: ')),
                year: Number(prompt('movie year: ')),
                image:prompt('image :') */}
            +
        </div>
      </div>
)

const mapStateToProps = state => {
    return {
        movies: state.movies.filter(
        el =>
            el.rating >= state.minRatingFilter &&
            el.title.toLowerCase().includes(
                state.titleFilter.toLowerCase().trim()
            )
      )
    }
}


const mapDispatchToProps = dispatch =>{

   return {
       
    onAddMovie:()=>{

        dispatch({

            type:'ADD_MOVIE',
            movie:{
                id: Math.random(),
                title: prompt('movie title: '),
                rating: Number(prompt('movie rating: ')),
                year: Number(prompt('movie year: ')),
                image:prompt('image :')
            }


            })



        }}
        
      


    }

    




   



const MovieListContainer = connect(mapStateToProps,mapDispatchToProps)(MovieList)

export default MovieListContainer