import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from 'axios';
import SmurfsData from './SmurfsData';
import SmurfsForm from './SmurfsForm';

export const SmurfsContext = createContext();
console.log('aw: App.js: SmurfsContext: ', SmurfsContext)

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
      <SmurfsContext.Provider value={smurf}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfsForm />
        <SmurfsData smurf={smurf} />
      </SmurfsContext.Provider>
    </div>
  );
}

export default App;
