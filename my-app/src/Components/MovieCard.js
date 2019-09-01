import React from 'react';
import ReactDom from 'react-dom';
import './MovieApp.css';
import Rating from './Rating';
import {connect} from 'react-redux'

const MovieCard =(props)=> {
    const {movie = {},onDelete = () => {},onEdit = () => {}}=props
    const {
            id,
            title = '',
            year = '',
            image = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
            rating = 0
            } = movie
            return (
<div className="movie-list">
<div className="movie-card">
<div className="movie-delete-button" onClick={() => onDelete(id)}>X</div>
<div className="movie-edit-button"
                onClick={() => onEdit(movie)} >
                Edit
            </div>
          <div className="movie-rating"><Rating count={rating}/></div>
          <div
            className="movie-image"
            style={{
              backgroundImage:
              `url('${image}')`
            }}
          />
          <div className="movie-description">{title} - {year}</div>
        </div>
</div>
            
)
        }



const mapDispatchToProps= dispatch =>{

        return{

          onDelete:(id)=>{

           dispatch({
            type:'DELETE_MOVIE',
            id:id



           }) 


          },

          onEdit: (movie) => {
            dispatch({
                type: 'EDIT_MOVIE',
                id: movie.id,
                movie: {
                    id: movie.id,
                    title: prompt('movie title: ',movie.title),
                    rating: Number(prompt('movie rating: ',movie.rating)),
                    year: Number(prompt('movie year: '),movie.year),
                    image:prompt('image :',movie.image)
                }
            })

             
        }


      }
    }






 const MovieCardContainer=connect(null,mapDispatchToProps)  (MovieCard) 
 export default MovieCardContainer;    
// export default MovieCard;