import React from 'react';
import {connect} from 'react-redux';

const CricData = (props) =>{
    return (
        <h2>Total Score of all Batsmen - {props.score1} </h2>
    )
}

function mapStateToProps (state){
    return state;
}

export default connect (mapStateToProps) (CricData);