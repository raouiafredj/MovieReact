import {createStore,combineReducers} from 'redux';



const ratingFilterReducer = (state = 0, action) => {
    if(action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

const titleFilterReducer = (state = '', action) => {
    if(action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

const moviesReducer = (state = [], action) => {
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

const store= createStore(combineReducers({

    movies:  moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer



})
)

console.log(store.getState())


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
       rating:3,
       image:'http://fr.web.img5.acsta.net/c_215_290/pictures/19/07/02/10/20/5277092.jpg'
  
  
  }

  const film1={
     id:'film1',
     title:'avant toi',
     year:2019,
     rating:2,
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgQJd07hskv-dwd-ZMyswPtnq1LJYI-K7WsqtnVjF5fftJD0_Cw'



  }

  store.dispatch({
    type: 'ADD_MOVIE',
    movie: inception
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: film
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: film1
})

// store.dispatch({
//     type: 'SET_RATING_FILTER',
//     rating: 5
// })

// store.dispatch({
//     type: 'SET_TITLE_FILTER',
//     title: 'test'
// })

export default store;