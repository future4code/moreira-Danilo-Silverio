import React from 'react';
import axios from 'axios';
import './Users.css'
import Labefy from '../images/labefy.png'
import UserIcon from '../images/user.png'
import Delete from '../images/delete.png'




const urlUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = { 
  headers: { 
    Authorization: "danilo-silveri-moreira"
  }
}


export default class Users extends React.Component {
  
    state = {
        users: []
    }
    
    componentDidMount(){
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios.get(urlUser, headers)
        .then((res) => {
          this.setState({users:res.data})
        })
        .catch((err) => {
            alert('Something is wrong! Try again')
        })
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
        .then((res) => {
          window.confirm(`Are you sure you want delete this user?`)
          this.getAllUsers()
          alert(`The user has been successfully deleted!`)
        })
        .catch((err) => {
          console.log(err.data)
        })
    }

  render() {
    
    const registeredUsers = this.state.users.map((user) => {
        return (
            <div className='user' key={user.id}>
              <img src={UserIcon} alt="User icon"/>
              <h2>{user.name}</h2>
              <img className='delete-icon'src={Delete} alt="Delete user icon"/>
              <button 
                className='delete-user' 
                onClick={() => this.deleteUser(user.id)}
                >
              </button>
              <button 
                className='user-info' 
                onClick={this.props.goToUsersPageInfo}
                > i
              </button>
            </div>
      )})
    
    return (
      <div className='user-page'>
        <header>
          <img src={Labefy} alt="Logo Labefy"/>
          <button onClick={this.props.goToRegisterPage}>Register</button>
        </header>
        <div className='card-user'>
          <div className='fieldset-header'>
                <h1>Users</h1>
                <p>This is a list of all registered Labe<span>Users.</span> If you're not yet a member click on <span>Register</span> and join us!</p>
          </div>
          {registeredUsers}
        </div>
      </div>
  
  )}
}