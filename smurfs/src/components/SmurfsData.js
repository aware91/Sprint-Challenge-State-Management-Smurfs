import React from 'react';

const SmurfsData = props => {
    console.log('aw: SmurfsData.js: props.smurf: ', props.smurf)
    return (
        <div>
            <h1>Smurfs</h1>
            <div className='smurfCard'>
                {props.smurf.map((smurfs)=>(
                    <div key={smurfs.id} className='smurfsCard'>
                        <p>Name: {smurfs.name}</p>
                        <p>Age: {smurfs.age}</p>
                        <p>Height: {smurfs.height}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SmurfsData;