import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as actionCreator from './store/action/action';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
  return{
    age:state.age,
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onAgeUp:()=>dispatch(actionCreator.ageUp(1)),
    onAgeDown:()=>dispatch(actionCreator.ageDown(1))
  }
}

class App extends React.Component{
  render(){
  return(
    <div className='App'>

      <h1>AGE:{this.props.age}</h1>
      <button onClick={this.props.onAgeUp}>HIGH</button>
      <button onClick={this.props.onAgeDown}>LOW</button>
      {this.props.loading && <img src={logo} alt="" className='App-logo'/>}
    </div>
  )
}
}





export default connect(mapStateToProps,mapDispatchToProps)(App);