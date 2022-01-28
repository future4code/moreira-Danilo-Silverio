import React from 'react';
import HomePage from './pages/Home/HomePage';
import RegisterAccount from './pages/Register/RegisterAccount';
import RegisterAccountContinue from './pages/Register/RegisterAccountContinue';
import AllPlaylists from './components/allPlaylists';
import PlaylistTracks from './pages/PlaylistTracks/PlaylistTracks';




export default class App extends React.Component {
  
  state = {

    currentPage: "homePage",
    clickedPlaylistUrl: ""

  }  
  


  changePages = () => {

    switch (this.state.currentPage){

        case "homePage":
            return <HomePage 
            goToRegisterPage={this.goToRegisterPage}
            goToAllPlaylists={this.goToAllPlaylists}
            />
        
        case "registerPage":
            return <RegisterAccount
            goToHomePage={this.goToHomePage}
            goToRegisterPageContinue={this.goToRegisterPageContinue}
            />

        case "registerPageContinue":
            return <RegisterAccountContinue
            goToHomePage={this.goToHomePage}
            goToRegisterPage={this.goToRegisterPage}
            goToAllPlaylists={this.goToAllPlaylists}
            />

        case "allPlaylistsPage":
            return <AllPlaylists
            goToHomePage={this.goToHomePage}
            goToAllPlaylists={this.goToAllPlaylists}
            goToPlaylistTracks={this.goToPlaylistTracks}
            />
        case "playlistTracksPage":
            return <PlaylistTracks url={this.state.clickedPlaylistUrl}
            goToHomePage={this.goToHomePage}
            goToAllPlaylists={this.goToAllPlaylists}
            />
              
        default:
            return <HomePage goToAllPlaylists={this.goToAllPlaylists}/>
    }
  }

  goToHomePage = () => {
    this.setState({currentPage: "homePage"})
  }

  goToRegisterPage = () => {
    this.setState({currentPage: "registerPage"})
  }

  goToRegisterPageContinue = () => {
    this.setState({currentPage: "registerPageContinue"})
  }

  goToAllPlaylists = () => {
    this.setState({currentPage: "allPlaylistsPage"})
  }

  goToPlaylistTracks = (url) => {
    this.setState({currentPage: "playlistTracksPage", clickedPlaylistUrl: url})
  }

  render() {
    
    return (
      <div>
        {this.changePages()}
      </div>
    )
  }
}
