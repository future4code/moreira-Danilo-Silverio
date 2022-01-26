import React from 'react';
import axios from 'axios';


const urlUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = { 
  headers: { 
    Authorization: "danilo-silveri-moreira"
  }
}

export default class App extends React.Component {
  
  state = {
    users: [],
    userName: "",
    userEmail: ""
  }
  
  onChangeUserName = (event) => {
    
    this.setState(
      {userName: event.target.value}
    )
  }

  onChangeUserEmail = (event) => {
    
    this.setState(
      {userEmail: event.target.value}
    )
  }

  registerUser = () => {
    
  const body = {
    name: this.state.userName,
    email: this.state.userEmail}

    axios.post(urlUser, body, headers)
    .then((res) => {
      alert(`The user ${this.state.userName} has been successfully registered`)
      this.setState({userName:""})
      this.setState({userEmail:""})
      this.getAllUsers()
    })
    .catch((err) => {
      alert('Something is wrong! Try again')
    })
  }

  getAllUsers = () => {
    axios.get(urlUser, headers)
    .then((res) => {
      this.setState({users:res.data})
      /* console.log(res.data.result) */
    })
    .catch((err) => {
      console.log(err.response)
    })
  } 

  componentDidMount(){
    this.getAllUsers();
  }

  render() {
      
    const registeredUsers = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })


    return (
      <div>
          <h1>Labenu Register User</h1>
          <input
            type="text"
            placeholder='Nome'
            value={this.state.userName}
            onChange={this.onChangeUserName}
          />
          <input
            type="email"
            placeholder='E-mail'
            value={this.state.userEmail}
            onChange={this.onChangeUserEmail}
          />
          <button onClick={this.registerUser}>Criar novo usuário</button>
          <div>
            {registeredUsers}
          </div>
      </div>
    )}
}

