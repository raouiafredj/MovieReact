// const film ={
//   id:'film',
//   title:'la vie scolaire',
//   year:2018,
//   rating:5,
//   image:'http://fr.web.img5.acsta.net/c_215_290/pictures/19/07/02/10/20/5277092.jpg'


// }

// action example : {type: 'ADD_MOVIE', movie: {id: 'whatever', title: 'Whatever', rating: 2, year: 1900}}
// action example : {type: 'EDIT_MOVIE', id: 12, movie: {id: 'whatever 2', title: 'Whatever', rating: 4, year: 1920}}
// action example : {type: 'DELETE_MOVIE', id: 12}



const movies = (state = [], action) => {
    if(action.type === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    if(action.type === 'EDIT_MOVIE') {
        return state.map(m => {
            if(m.id === action.id) {
                return action.movie
            }
            return m
        })
    }
    if(action.type === 'DELETE_MOVIE') {
        return state.filter(m => {
            if(m.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}


export default movies