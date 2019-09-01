import React from 'react';
import {Provider} from 'react-redux'

import './App.css';
import './Components/MovieApp';
import MovieApp from './Components/MovieApp';
import Test from './Components/Test';
import './reducers/ratingFilter';
import './reducers/titleFilter';
import movieAppStore from './store';
import MoviesApp from './Components/MoviesApp';


function App() {
  
  return (
    <Provider store={movieAppStore}>
         {/* <MovieApp/> */}
         {/* <Test/> */}

           <MoviesApp/>

    </Provider>
    
  );
}

export default App;
