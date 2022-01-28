import React from 'react';
import HomePage from './components/HomePage';
import CreatePlaylist from './components/CreatePlaylist';
import AllPlaylists from './components/AllPlaylists';











export default class App extends React.Component {
  
  state = {

    page: "homePage"

  }  
  


  changePages = () => {

    switch (this.state.page){

        case "homePage":
            return <HomePage goToCreatePLaylist={this.goToCreatePLaylist}/>
        
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
