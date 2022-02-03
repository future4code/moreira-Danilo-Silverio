import React from 'react';
import './Home.css'
import Labefy from './../../assets/labefy.png'
import App from './../../assets/app.png'



export default class HomePage extends React.Component {
  
 

  render() {
    
    
    
    
    return (
      <div className='home-page'>
        <header className='header'>
          <img src={Labefy} alt="Logo Labefy"/>
          <div>
            <button className='header-subscribe' onClick={this.props.goToRegisterPage}>Subscribe</button>
            <button className='header-login' onClick={this.props.goToAllPlaylists}>Login</button>
          </div>
        </header>
        <div className='home-content'>
          <div className='home-text'>
            <p className='our-motto'>It's much more than just music. It's a lifestyle</p>
            <h1 className='home-title'>Make your own playlist and share it with the world</h1>
            <p className='quick-description'>Millions of songs and podcasts to explore. Come be part of this lifestyle with the <br/>greatest artists and the best music in the world.</p>
            <button className='subscribe' onClick={this.props.goToRegisterPage}>Subscribe now</button>
            <p className='subscribe-plan'>Subscribe for <span>U$ 5.99/month in the annual plan.</span></p>
          </div>
          <div className='app-image'>
            <img src={App} alt="Labefy App"/>
          </div>
        </div>
      </div>
    )
  }
}