import React from 'react';
import axios from 'axios';




const headers = {
    headers:
    {Authorization: "danilo-silveri-moreira"}
}


export default class PlaylistTracks extends React.Component {
  
    
    state = {

        name: "",
        artist: "",
        url: ""

    }

    postTrackPlaylist = (id) => {
      
        const body = {
              name: this.state.name,
              artist: this.state.artist,
              url: this.state.url
        }
    
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, headers)
        .then((res) => {
            alert(`${this.state.name} has been successfully added!`)
            this.setState({name: ""})
            this.setState({artist: ""})
            this.setState({url: ""})
        })
        .catch((err) => {
            console.log(err)
        })
    
      }

      onChangeTrackName = (event) => {
    
        this.setState ({name: event.target.value})
      }

      onChangeTrackArtist = (event) => {
    
        this.setState ({artist: event.target.value})
      }

      onChangeTrackUrl = (event) => {
    
        this.setState ({url: event.target.value})
      }
  
    render() {
        
    
    
    return (
        <div>
            <input 
                type="text" 
                placeholder='Type the music name'
                value={this.state.name}
                onChange={this.onChangeTrackName}   
            />
            <input 
                type="text" 
                placeholder='Type the music artist'
                value={this.state.artist}
                onChange={this.onChangeTrackArtist}   
            />
            <input 
                type="url" 
                placeholder='Enter the music link'
                value={this.state.url}
                onChange={this.onChangeTrackUrl}   
            />
            <button onClick={this.postTrackPlaylist}>Add track</button>
        </div>
    )
  }
}
