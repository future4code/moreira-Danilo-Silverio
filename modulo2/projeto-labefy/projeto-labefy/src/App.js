import React from 'react';
import HomePage from './pages/Home/HomePage';
import RegisterAccount from './pages/Register/RegisterAccount';
import RegisterAccountContinue from './pages/Register/RegisterAccountContinue';
import CreatePlaylist from './components/CreatePlaylist';
import AllPlaylists from './components/AllPlaylists';











export default class App extends React.Component {
  
  state = {

    page: "homePage"

  }  
  


  changePages = () => {

    switch (this.state.page){

        case "homePage":
            return <HomePage goToRegisterPage={this.goToRegisterPage}/>
        
        case "registerPage":
            return <RegisterAccount
            goToHomePage={this.goToHomePage}
            goToRegisterPageContinue={this.goToRegisterPageContinue}
            />

        case "registerPageContinue":
            return <RegisterAccountContinue
            goToHomePage={this.goToHomePage}
            goToRegisterPage={this.goToRegisterPage}
            goToCreatePLaylist={this.goToCreatePLaylist}
            />

        case "createPlaylistPage":
            return <CreatePlaylist
            goToHomePage={this.goToHomePage}
            goToAllPlaylists={this.goToAllPlaylists}
            />
                
        case "allPlaylistsPage":
            return <AllPlaylists 
            goToCreatePLaylist={this.goToCreatePLaylist}
            goToHomePage={this.goToHomePage}
            />
        
        default:
            return <HomePage goToCreatePLaylist={this.goToCreatePLaylist}/>
    }
  }

  goToHomePage = () => {
    this.setState({page: "homePage"})
  }

  goToRegisterPage = () => {
    this.setState({page: "registerPage"})
  }

  goToRegisterPageContinue = () => {
    this.setState({page: "registerPageContinue"})
  }

  goToCreatePLaylist = () => {
    this.setState({page: "createPlaylistPage"})
  }

  goToAllPlaylists = () => {
    this.setState({page: "allPlaylistsPage"})
  }

  render() {
    
    return (
      <div>
        {this.changePages()}
      </div>
    )
  }
}
