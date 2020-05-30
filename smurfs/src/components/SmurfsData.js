import React from 'react';

const SmurfsData = props => {
    console.log('aw: SmurfsData.js: props.smurf: ', props.smurf)
    return (
        <div>
            {props.smurf.map((smurfs)=>(
                <div key={smurfs.id}>
                    <h1>Smurfs</h1>
                    <p>Name: {smurfs.name}</p>
                    <p>Age: {smurfs.age}</p>
                    <p>Height: {smurfs.height}</p>
                </div>
            ))}
        </div>
    )
}

export default SmurfsData;