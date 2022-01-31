import React from 'react';
import axios from 'axios';
import Labefy from './../../assets/labefy.png'
import "./Tracks.css"



const headers = {
    headers:
    {Authorization: "danilo-silveri-moreira"}
}


export default class PlaylistTracks extends React.Component {
  
    render() {
        
    
    
    return (
          <div className='tracks-page'>
            <header className='header'>
              <img src={Labefy} alt="Logo Labefy"/>
              <div>
                <button className='back-to-playlists' onClick={this.props.goToAllPlaylists}>Back to playlists</button>
              </div>
            </header>
            <div className='add-tracks'>
              <input 
                    type="text" 
                    placeholder='Type the music name'
                />
                <input 
                    type="text" 
                    placeholder='Type the music artist'
                />
                <input 
                    type="url" 
                    placeholder='Enter the music link'  
                />
                <button className='button-add'>Add</button>
            </div>
        </div>
    )
  }
}
