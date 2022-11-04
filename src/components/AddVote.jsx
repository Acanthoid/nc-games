import { useState } from "react";
import { addVoteToApi } from "../Api";


function AddVote(dataObject) {
    const [currentVotes, newVotes] = useState(0);
    console.log(currentVotes, 'HERE')
    console.log(dataObject)
    
function manageButton(){
    addVoteToApi(dataObject.review_id)
};

    return(
        <button id="voteBtn"
        onClick={manageButton}>Add your vote!</button>
    )
}

export default AddVote;