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
    trackName: "",
    trackArtist: "",
    trackUrl: ""
   
  }
 
  
  /* ADD PLAYLIST------------------------------------------------------------------------- */

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

  /* GET PLAYLIST------------------------------------------------------------------------- */

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

/* DELETE PLAYLIST------------------------------------------------------------------------- */

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

/* ADD TRACK------------------------------------------------------------------------- */
  
  onChangeTrackName = (event) => {

  this.setState({trackName: event.target.value})

  }

  onChangeTrackArtist = (event) => {

    this.setState({trackArtist: event.target.value})
  
  }

  onChangeTrackUrl = (event) => {

    this.setState({trackUrl: event.target.value})
  
  }


  addTrackToPlaylist= (id) => {

    const bodyTrack = {

      name: this.state.trackName,
      artist: this.state.trackArtist,
      url: this.state.trackUrl
    }

    axios.post
    (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, bodyTrack, headers)
    .then((res) => {
      alert(`The music called ${this.state.trackName} has been successfully added to the playlist!`)
      this.setState({trackName: ""})
      this.setState({trackArtist: ""})
      this.setState({trackUrl: ""})
    })
    .catch((err) => {
      console.log(err)
    })

  }

  render() {
    
    const myPlaylists = this.state.playlists.map((playlist) => {
      return (
          <div className='playlist' key={playlist.id}>
          <div className='name-and-cover'>
            <img className='playlist-cover' src={Playlist} alt="playlist cover" />
            <h2>{playlist.name}</h2>
            <h4><StarRating/></h4>
          </div>
          <div className='playlist-buttons'>
            <button className='add-music'>Add +</button>
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
          {/* <div className='add-musics-space'>
          <input 
                type="text"
                placeholder='Enter the music name'
                value={this.state.trackName}
                onChange={this.onChangeTrackName}
            />
            <input 
                type="text"
                placeholder='Enter the music artist'
                value={this.state.trackArtist}
                onChange={this.onChangeTrackArtist}
            />
            <input 
                type="url"
                placeholder='Enter the music link'
                value={this.state.trackUrl}
                onChange={this.onChangeTrackUrl}
            />
            <button onClick={this.addTrackToPlaylist}>Add</button>
          </div> */}
          <div className='playlist-list'>
          {myPlaylists}
          </div>
        </div>
      </div>
    )
  }
}