import React from 'react';
import PropTypes from 'prop-types';

//class component
//return 대신 render 사용
class App extends React.Component{
  //변화하는 데이터
  //state is object
  state = {
    count: 0
  };

  add = () => {
    //render을 부르려면 setState를 써야함
    //state에 의존하지 않으려면 current 사용하는 것이 best
    this.setState(current => ({ count : current.count + 1}))
  };

  minus = () => {
    this.setState(current => ({ count : current.count - 1}))
  };

  render(){
  return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
    </div>
    );
  }
}

export default App;