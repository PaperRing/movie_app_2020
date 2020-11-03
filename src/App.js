import React from 'react';

//변수를 활용하는 방법
function Food({ fav }){
  //console.log(props.fav);
  console.log(fav);
  return (
    <div>
      <h3>I like {fav}</h3>
    </div>
  );
}

function App() {
  return(
    <div>    
      <h1>하이이이</h1>
      <Food fav="kimchi"/>
      <Food fav="Potato"/>

    </div>
    );
}
  

export default App;
