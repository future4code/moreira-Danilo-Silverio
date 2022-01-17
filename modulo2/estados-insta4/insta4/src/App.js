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
const FormularioPost = styled.div`
  margin-bottom: 20px;`

const InputPost = styled.input`
  margin-right: 10px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #f79d0c;
  background-color:#fdfdfd;`

const PostarPost = styled.button`
  background-color:#f79d0c;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #cac2b4;
  cursor: pointer;
  width: 90px;
  height: 30px;`

class App extends React.Component {
  
  state = {

    postagens: [
      {
        nomeUsuario:'danilo.silveri',
        fotoUsuario: 'https://media-exp1.licdn.com/dms/image/C4D03AQF4CKrGrDV8_w/profile-displayphoto-shrink_200_200/0/1641164300991?e=1647475200&v=beta&t=8PFT3rO8H4c548DCkqCNjALGP7Xeo9yBQWW7XUJyAjw',
        fotoPost: 'https://scontent.fbfh17-1.fna.fbcdn.net/v/t1.6435-9/127782644_3463190797131725_841098440981033381_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLbNgI8c-u4AX9IOkBc&_nc_ht=scontent.fbfh17-1.fna&oh=00_AT9xMwHW3A-NmvTi3ClYdQhCiNTAcZZMnp5inGZ4PyiyWw&oe=6205A53C'
      },

      {
        nomeUsuario:'sons_of_anarchy',
        fotoUsuario: 'https://external-preview.redd.it/iMdpLc0Ls9CxyAZBz0Fx5cNLZ0TneNt8R2-1yxkorSo.jpg?auto=webp&s=9f3bef223528e2cb777a2fdda35cd943149a5917',
        fotoPost: 'https://www.sueddeutsche.de/image/sz.1.2126132/704x396?v=1520905490'
      },

      {
        nomeUsuario:'slytherin-house',
        fotoUsuario: 'data:image/jpeg;base64,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',
        fotoPost: 'https://images.ctfassets.net/usf1vwtuqyxm/3jkQPqFTrXqEvlCKBpCI4s/a1d9bb504ec59b50be05462f6b34a256/HP-F3-prisoner-of-azkaban-draco-crabbe-goyle-pansy-staring-web-landscape?fm=jpg&q=70&w=2560'
      }
    ],

      inputUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
  }


  adicionarPost = () => {

    const novoPost = {

      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };

    const novasPostagens = [...this.state.postagens, novoPost];

    this.setState({postagens: novasPostagens,
      inputUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""})
  }

  onChangeInputUsuario = (event) => {

    this.setState({ inputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
 
    this.setState({ inputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {

    this.setState({  inputFotoPost: event.target.value });
  };

  render() {

    const feedDePublicacoes = this.state.postagens.map((post) => {

      return <Post
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}/>
    })

    return (
      <MainContainer>
        <h1>Insta4</h1>
          <FormularioPost>
            <InputPost
              value={this.state.inputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <InputPost
              value={this.state.inputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"(Link) foto de perfil"}
            />
            <InputPost
              value={this.state.inputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"(Link) foto do post"}
            />
             <PostarPost onClick={this.adicionarPost}>Postar</PostarPost>
          </FormularioPost>
            {feedDePublicacoes}
        
        {/* <Post
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
        /> */}
      </MainContainer>
    );
  }
}

export default App;