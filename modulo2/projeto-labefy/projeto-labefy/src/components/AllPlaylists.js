import React from 'react';
import axios from 'axios';


const playlistUrlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers:
    {Authorization: "danilo-silveri-moreira"}
}



export default class AllPlaylists extends React.Component {
  
  state = {

    playlists: []

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
            <div key={playlist.id}>
            <h2>{playlist.name}</h2>
            <button onClick={() => this.deletePLaylist(playlist.id)}>X</button>
            </div>
        )

    })
    
    
    return (
      <div>
        <h1>All Playlist</h1>
        {myPlaylists}
        <button onClick={this.props.goToCreatePLaylist}>Create playlist</button>
        <button onClick={this.props.goToHomePage}>Home page</button>
      </div>
    )
  }
}