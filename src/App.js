import React from 'react';
import './App.css';
import Person from './Person';

class App extends React.Component{
  state={x:false}

  toggleshow=()=>{  this.setState({x:!this.state.x}) }

render(){
  return(
<div>
  <button onClick={this.toggleshow}>show</button>
  {this.state.x==true? <Person></Person> :null }
  
</div>
  )
}

}
export default App;
