import React from 'react';
import axios from 'axios';






const playlistUrlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers:
    {Authorization: "danilo-silveri-moreira"}
}




export default class CreatePlaylist extends React.Component {
  
  state = {

    playlistName: ""

  }
  
  onChangePLaylistName = (event) => {

    this.setState({playlistName: event.target.value})

  }

  postPlaylist = () => {
      
    const body = {
          name: this.state.playlistName
    }

    axios.post(playlistUrlApi, body, headers)
    .then((res) => {
        alert(`Your playlist named ${this.state.playlistName} has been successfully created!`)
        this.setState({playlistName: ""})
    })
    .catch(() => {
        alert('Something is wrong! Try again')
    })

  }
  
  render() {
    
    
    return (
      <div>
        <h1>Create Playlist</h1>
        <input 
            type="text"
            placeholder='Name your playlist..'
            value={this.state.playlistName}
            onChange={this.onChangePLaylistName}
        />
        <button onClick={this.postPlaylist}>Criar</button>
        <button onClick={this.props.goToHomePage}>Home page</button>
        <button onClick={this.props.goToAllPlaylists}>All Playlists</button>
      </div>
    )
  }
}