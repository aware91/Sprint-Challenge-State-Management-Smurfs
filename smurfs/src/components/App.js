import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SmurfsData from './SmurfsData';
import SmurfsForm from './SmurfsForm';

function App()  {
  const [smurf, setSmurf] = useState([]);

  useEffect(()=>{
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            setSmurf(res.data)
            console.log('aw: App.js: axios: ', res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfsForm />
      <SmurfsData smurf={smurf} />
    </div>
  );
}

export default App;
