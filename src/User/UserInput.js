import React from 'react';

//rember must wrap within a block
//for name to update as you type, the attribute passed must correspond to what you mention in parent.
const userInput = (props) => {
    return(
        <div>
            <input type='text' onChange={props.changeAsType} value={props.namePlaceholder}/>
            <p>{props.namePlaceholder}</p>
        </div>

    )
};

//remember to export the variable defined
export default userInput;