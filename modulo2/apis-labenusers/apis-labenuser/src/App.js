import React from 'react';
import Register from './components/Register/Register';
import Users from './components/Users/User';

export default class App extends React.Component {
  
  state = {
    page: "registerPage"
  }
  
  
  changePages = () => {
    
    switch (this.state.page){
      
      case "registerPage":
        return <Register goToUsersPage={this.goToUsersPage}/>
      
      case "usersPage":
        return <Users goToRegisterPage={this.goToRegisterPage}/>
      
      default:
        return <Register/>
    }
  }
  
  goToRegisterPage = () => {
    this.setState({page: "registerPage"})
  }
  
  goToUsersPage = () => {
    this.setState({page: "usersPage"})
  }

  render() {
    

    
    return (
      <div>
        {this.changePages()}
      </div>
  
  )}
}
