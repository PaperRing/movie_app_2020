import React from 'react';

//변수를 활용하는 방법
function Food({ name, pic }){
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={pic}/>
    </div>
  );
}

const foodILike = [
  {
    name : "potato",
    image :
    "https://images.eatsmarter.de/sites/default/files/styles/576x432/public/images/kartoffeln-vitamin-c-bombe-341x256.jpg"
  }
];

function App() {
  return(
    <div>
      {foodILike.map(dish =>(
        <Food name={dish.name} pic={dish.image}/>
      ))}
    </div>
    );
}
  

export default App;
