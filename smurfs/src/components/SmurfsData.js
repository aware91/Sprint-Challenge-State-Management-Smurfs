import React from 'react';

const SmurfsData = props => {
    console.log('aw: SmurfsData.js: props.smurf: ', props.smurf)
    return (
        <div>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default SmurfsData;