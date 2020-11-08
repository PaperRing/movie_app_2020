import React from 'react';
import PropTypes from 'prop-types';

function Food ({name, img, rating}){
  return(
    <div>
      <h3>I like {name}</h3>
      <img src={img} alt={name}/>
      <div>rating : {rating}/5.0</div>
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired
};

const foodILike = [
  {
    id : 1,
    name : "potato",
    image :     
    "https://images.eatsmarter.de/sites/default/files/styles/576x432/public/images/kartoffeln-vitamin-c-bombe-341x256.jpg",
    rating : 4
  },
  {
    id : 2,
    name : "kimchi",
    image :     
    "https://images.eatsmarter.de/sites/default/files/styles/576x432/public/images/kartoffeln-vitamin-c-bombe-341x256.jpg",
    rating : 5
  }
];

function App(){
  return(
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>
      ))}
      {console.log(foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>
      )))}
    </div>
  );
}

export default App;