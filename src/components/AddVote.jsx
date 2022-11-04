import { useState } from "react";
import { addVoteToApi } from "../Api";


function AddVote(dataObject) {
    const [currentVotes, newVotes] = useState(dataObject.votes);
    
function manageButton(){
    addVoteToApi(dataObject.review_id)
    newVotes(currentVotes + 1)
};

    return(
        <div>
            Votes: {currentVotes}
            <button id="voteButton"
            onClick={manageButton}>Add your vote!</button>
        </div>
        
    )
}

export default AddVote;