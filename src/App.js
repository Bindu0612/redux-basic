import React, {Component} from 'react';
import {connect} from 'react-redux';

import CricData from './CricData';

class App extends Component{


  render(){
    return(
      <>
        <>
          <CricData/><hr/>

          <h1> Batsman1 Score - {this.props.a.score1}</h1>

          <button onClick = {this.props.Increment1}> INC </button>
          {/* <button onClick = {this.props.Decrement}> DEC </button> */}
        </>

        <>
          <h1> Batsman2 Score - {this.props.a.score2}</h1>
          <button onClick = {this.props.Increment2}> INC </button>
          {/* <button onClick = {this.props.Decrement}> DEC </button> */}
        </>

        <>
           <h1> Batsman3 Score - {this.props.a.score3}</h1>
          <button onClick = {this.props.Increment3}> INC </button>
          {/* <button onClick = {this.props.Decrement}> DEC </button> */}
        </>

      </>
    )
  }
}

function mapStateToProps (state){
  console.log("str1",state);
  return {a:state}
}

function mapDispatchToProps (dispatch){
  return{
    Increment1 : () => dispatch ({type:'INC1'}),
    Increment2 : () => dispatch ({type:'INC2'}),
    Increment3 : () => dispatch ({type:'INC3'}),
    // Decrement : () => dispatch ({type : 'DEC'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);