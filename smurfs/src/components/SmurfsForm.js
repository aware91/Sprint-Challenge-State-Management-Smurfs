import React, { useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class SmurfsForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: ''
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            id: Date.now()
        }
        axios
            .post('http://localhost:3333/smurfs', {smurf})
            .then(res => {
                console.log('aw: SmurfsForm.js: Post: ', res)
                console.log('aw: SmurfsForm.js: Post: ', res.data)
            })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Smurfs</h2>
                <label>
                    Name
                    <input 
                        type='text'
                        name='name'
                        value={this.name}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Age
                    <input 
                        type='text'
                        name='age'
                        value={this.age}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Height
                    <input 
                        type='text'
                        name='height'
                        value={this.height}
                        onChange={this.handleChanges}
                    />
                </label>
                <button>Add Smurf</button>
            </form>
        )
    }
}
