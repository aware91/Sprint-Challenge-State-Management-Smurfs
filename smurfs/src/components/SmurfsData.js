import React, { useContext } from 'react';
import { SmurfsContext } from './App';

const SmurfsData = props => {
    const smurf = useContext(SmurfsContext);

    console.log('aw: SmurfsData.js: props.smurf: ', smurf)
    return (
        <div>
            <h1>Smurfs</h1>
            <div className='smurfCard'>
                {smurf.map((smurfs)=>(
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