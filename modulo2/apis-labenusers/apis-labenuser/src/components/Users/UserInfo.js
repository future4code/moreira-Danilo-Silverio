import React from 'react';
import './Users.css'
import Labefy from '../images/labefy.png'







export default class UserInfo extends React.Component {
  
  
  
  
    render() {
    
    
    
    
    return (
        <div className='user-page'>
            <header>
                <img src={Labefy} alt="Logo Labefy"/>
                <button onClick={this.props.goToUsersPage}>Back to users</button>
            </header>
        </div>
    )}
}
