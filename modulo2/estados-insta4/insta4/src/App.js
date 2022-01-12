import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import EuNaMoto from './img/eu-na-moto.png'
import FotoPerfil from './img/perfil.jpeg'
import Soa from './img/sons-of-anarchy.png'
import SoaPerfil from './img/sons-perfil.jpg'
import Slytherin from './img/slytherin.jpg'
import SlyPerfil from './img/slytherin-perfil.jpg'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'danilo.silveri'}
          fotoUsuario={FotoPerfil}
          fotoPost={EuNaMoto}
          
        />

        <Post
          nomeUsuario={'sons_of_anarchy'}
          fotoUsuario={SoaPerfil}
          fotoPost={Soa}
        />

        <Post
          nomeUsuario={'slytherins'}
          fotoUsuario={SlyPerfil}
          fotoPost={Slytherin}
        />
      </MainContainer>
    );
  }
}

export default App;
