import React from 'react';

//Remember: must wrap within a div block
const userOutput = (props) => {
    return(
        <div>
            <p onClick={props.clickToChange}>{props.name}</p>
            <p></p>
        </div>
    )
};

export default userOutput;