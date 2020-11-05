import React from 'react';
import PropTypes from 'prop-types';

//변수를 활용하는 방법
function Food({ name, pic, rating }){
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={pic} alt={name}/>
      <div>rating : {rating} / 5.0</div>
    </div>
  );  
}

//제대로된 변수가 들어갔는지 확인하는 기능
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id : 1,
    name : "potato",
    image :
    "https://images.eatsmarter.de/sites/default/files/styles/576x432/public/images/kartoffeln-vitamin-c-bombe-341x256.jpg",
    rating : 5
  }
];

function renderFood(dish) {
  return <Food 
          key={dish.id}  
          name={dish.name} 
          pic={dish.image}
          rating={dish.rating} />;
}

function App() {
  return(
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
    );
}
  

export default App;
