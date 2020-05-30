import React, { useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class SmurfsForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('aw: SmurfsForm: handleChanges: state', this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }

        console.log('aw: SmurfsForm.js: handleSubmit: smurf: ',smurf)
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log('aw: SmurfsForm.js: Post: ', res)
                console.log('aw: SmurfsForm.js: Post: ', res.data)
            })
            .catch(err => {
                console.log('aw: SmurfsForm.js: err: ',err.response)
            })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className='smurfsForm'>
                <h2>Add Smurfs</h2>
                <label className='infoEnter'>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={this.name}
                        onChange={this.handleChanges}
                    />
                </label>
                <label className='infoEnter'>
                    Age: 
                    <input 
                        type='text'
                        name='age'
                        value={this.age}
                        onChange={this.handleChanges}
                    />
                </label>
                <label className='infoEnter'>
                    Height:
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
