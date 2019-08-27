import React, { Component } from "react";
import Spinner from './Spinner';
import MovieApp from "./MovieApp";


// let cars = [
//     {id: 1, name: "Golf"},
//     {id: 2, name: "Audi"},
//     {id: 3, name: "Passat"},
//     {id: 4, name: "Bmw"}
//   ];

class Test extends React.Component {
      constructor(props){
      super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount(){
      this.setState({loading: false})
  }

  componentDidMount(){
    setTimeout(() => { 
      this.setState({loading: false})
    },2000)
} // simulate loading

      render(){
        // let content = this.state.loading ? <Spinner /> : cars.map((c, i) => <div key={i}>{c.name}</div>)
        
        let content = this.state.loading ? <Spinner />:<div> <MovieApp/></div> 
        return (
      <div>{content}</div>
    )
  }
}


export default Test;