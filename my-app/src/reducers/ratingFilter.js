const ratingFilter=(state=0,action)=>{

if(action.type==='SET_RATING_FILTER'){

    return action.rating
}
 return state


}

// console.log(ratingFilter(0,{type:SET_RATING_FILTER,rating:5}))


export default ratingFilter;