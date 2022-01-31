import React from 'react';
import axios from 'axios';
import StarRating from './StartRating';
import './AllPlaylists.css';
import Labefy from '../assets/labefy.png';
import Playlist from '../assets/playlist.png';






const playlistUrlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers:
    {Authorization: "danilo-silveri-moreira"}
}




export default class AllPlaylists extends React.Component {
  
  state = {

    playlistName: "",
    playlists: [],
   
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
        this.getAllPlaylists();
    })
    .catch(() => {
        alert('Something is wrong! Try again')
    })

  }

  componentDidMount() {
    this.getAllPlaylists();
}

  getAllPlaylists = () => {

    axios.get(playlistUrlApi,headers)
    .then((res) => {
        this.setState({playlists: res.data.result.list})
    })
    .catch((err) => {
        alert('Something is wrong! Try again')
    })

}

  deletePLaylist = (id) => {
    
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,headers)
    .then((res) => {
        window.confirm(`Are you sure you want delete this playlist?`)
        this.getAllPlaylists()
        alert(`This playlist has been successfully deleted!`)
    })
    .catch((err) => {
        alert('Something is wrong! Try again')
    })
}
  
  render() {
    
    const myPlaylists = this.state.playlists.map((playlist) => {
      return (
          <div className='playlist' key={playlist.id}>
          <div className='name-and-cover'>
            <img className='playlist-cover' src={Playlist} alt="playlist cover" />
            <h2>{playlist.name}</h2>
            <h3><StarRating/></h3>
          </div>
          <div className='playlist-buttons'>
            <button className='info' onClick={() => this.props.goToPlaylistTracks(playlist.url)}>...</button>
            <button className='delete' onClick={() => this.deletePLaylist(playlist.id)}>X</button>
          </div>
          </div>
      )

  })
    
    return (
      <div className='playlist-page'>
        <header>
          <img src={Labefy} alt="Logo Labefy" />
          <button className='home' onClick={this.props.goToHomePage}>Home</button>
        </header>
        <div className='playlist-content'>
          <div className='create-playlist'>
            <h1>Create playlist</h1>
            <input 
                type="text"
                placeholder='Type the name of your new playlist'
                value={this.state.playlistName}
                onChange={this.onChangePLaylistName}
            />
            <button className='add' onClick={this.postPlaylist}>Add</button>
          </div>
          <div className='playlist-list'>
          {myPlaylists}
          </div>
        </div>
      </div>
    )
  }
}