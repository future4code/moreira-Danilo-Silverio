import React from 'react';
import './Register.css'
import Labefy from './../../assets/labefy.png'



export default class RegisterAccount extends React.Component {
  
  
  render() {
    
    
    return (
      <div className='register-page'>
        <header>
          <img src={Labefy} alt="Logo Labefy" />
          <button className='home' onClick={this.props.goToHomePage}>Home</button>
        </header>
        <div>
          <fieldset className= 'create-user'>
            <div className='fieldset-header'>
              <p className='step'>STEP: <span>1 -</span> 2</p>
              <h1>Create an user</h1>
              <p className='informations'>Fill in the fields below to continue progressing with your registration</p>
            </div>
            <label>Name</label>
            <input 
                type="text" 
                placeholder='Type your name'
            />
            <label>Surname</label>
            <input 
                type="text" 
                placeholder='Type your lastname'
            />
            <label>Email</label>
            <input 
                type="email" 
                placeholder='Type your e-mail'

            />
            <button className='continue' onClick={this.props.goToRegisterPageContinue}>Continue</button>
          </fieldset>
        </div>
      </div>
  
  )}
}