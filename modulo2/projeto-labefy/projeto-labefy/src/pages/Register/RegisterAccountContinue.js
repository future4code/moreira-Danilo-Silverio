import React from 'react';
import './Register.css'
import Labefy from './../../assets/labefy.png'



export default class RegisterAccountContinue extends React.Component {
  
  
  render() {
    
    
    return (
      <div className='register-page'>
        <header>
          <img src={Labefy} alt="Logo Labefy" />
          <div>
            <button className='back-to-step-one' onClick={this.props.goToRegisterPage}>Back</button>
            <button className='home' onClick={this.props.goToHomePage}>Home</button>
          </div>
        </header>
        <div>
          <fieldset className= 'create-user'>
            <div className='fieldset-header'>
              <p className='step'>STEP: <span>2 -</span> 2</p>
              <h1>Create an user</h1>
              <p className='informations'>Fill in the fields below to continue progressing with your registration</p>
            </div>
            <label>Password</label>
            <input 
                type="password" 
                placeholder='Type your password'
            />
            <label>Birthday</label>
            <input 
                type="text" 
                placeholder='ex: 00/00/0000'
            />
            <input 
                type="checkbox" 
                placeholder='Type your e-mail'
            />
            <p className='checkbox'>Quero receber informações e novidades do Labefy</p>
            <button className='continue' onClick={this.props.goToAllPlaylists}>Go to playlist</button>
          </fieldset>
        </div>
      </div>
  
  )}
}