import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
  //render 다음으로 호출 
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 3000);
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ?  "Loading..." : "We are readey!"}</div>
  }
}

export default App;