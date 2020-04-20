function reducer (state = {score1 : 30, score2 : 40, score3 : 50}, action){
    
    var batsmanScore = {...state};

    if (action.type == 'INC1'){
       batsmanScore.score1 = batsmanScore.score1+1;
    }

   else if (action.type == 'INC2'){
        batsmanScore.score2 = batsmanScore.score2+1;
             }

    else if (action.type == 'INC3'){
        batsmanScore.score3 = batsmanScore.score3+1;
     }
    

    // else if (action.type == 'DEC'){
    //     let batsmanScore = state.score - 1;
    //     state = { score: batsmanScore }
    // }
    return batsmanScore;
}

export default reducer;