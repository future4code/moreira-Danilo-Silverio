import React from 'react';
import axios from 'axios';
import './Register.css'
import Labefy from '../images/labefy.png'

const urlUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = { 
  headers: { 
    Authorization: "danilo-silveri-moreira"
  }
}


export default class Register extends React.Component {
  
    state = {
        userName: "",
        userEmail: ""
    }

    onChangeUserName = (event) => {
    
        this.setState ({userName: event.target.value})
      }
    
    onChangeUserEmail = (event) => {
        
        this.setState({userEmail: event.target.value})
      }
    
    registerUser = () => {
        const body = {
            name: this.state.userName,
            email: this.state.userEmail}
    
    axios.post(urlUser, body, headers)
        .then((res) => {
          alert(`The user ${this.state.userName} was successfully registered`)
          this.setState({userName:""})
          this.setState({userEmail:""})
          /* this.getAllUsers() */
        })
        .catch((err) => {
          alert('Something is wrong! Try again')
        })
      }
  
  render() {
    
    
    return (
      <div className='register-page'>
        <header>
          <img src={Labefy} alt="Logo Labefy" />
          <button onClick={this.props.goToUsersPage}>See all users</button>
        </header>
        <div>
          <fieldset className= 'create-user'>
            <div className='fieldset-header'>
              <h1>Create an user</h1>
              <p>Fill in the fields below to continue progressing with your registration</p>
            </div>
            <label>Name</label>
            <input 
                type="text" 
                placeholder='Type your name'
                value={this.state.userName}
                onChange={this.onChangeUserName}   
            />
            <label>Email</label>
            <input 
                type="email" 
                placeholder='Type your e-mail'
                value={this.state.userEmail}
                onChange={this.onChangeUserEmail}   
            />
            <button className='register' onClick={this.registerUser}>Register</button>
          </fieldset>
        </div>
      </div>
  
  )}
}