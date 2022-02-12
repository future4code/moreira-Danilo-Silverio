import React, { Component } from 'react';
import './Home.css'
import Matches from '../../assets/perfil.png'





export default class Home extends Component {
  
  
  
  
  render() {
    return (
      <div className='tela-aplicativo'>
        <div className='cabecalho'>
          <h1>astromatch</h1>
          <img className='icone-match' src={Matches}/>
        </div>
        <div>
          a
        </div>
        <div className='rodape'>
          <button>X</button>
          <button>O</button>
        </div>
      </div>
    )
  }
}
