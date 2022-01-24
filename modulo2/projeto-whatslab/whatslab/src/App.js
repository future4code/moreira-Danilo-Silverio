import React from 'react';
import './App.css';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  height: 100vh;
  margin-left: 50%;
  transform: translateX(-50%);
  border-left: 1px solid black;
  border-right: 1px solid black;`


const Funcionalidades = styled.div`
  margin-bottom: 8px;
  
`

const CampoUsuario = styled.input`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid black;
 `

const CampoMensagem = styled.input`
  width: 200px;
  height: 30px;
  margin: 0px 2px;
  border-radius: 8px;
  border: 1px solid black;
  `

const BotaoEnviar = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid black;
`
class App extends React.Component {

  state = {

    mensagens: [

      {
        usuario: "",
        mensagem: ""
      }
    ],

    inputUsuario: "",
    inputMensagem: ""
  };

  novaMensagem = () => {

    const inserirNovaMensagem = {

      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    };

    const inserirMensagens = [...this.state.mensagens, inserirNovaMensagem]

    this.setState({
      mensagens: inserirMensagens,
      inputUsuario: "",
      inputMensagem: ""})
  };

  onChangeInputUsuario = (event) => {

    this.setState({inputUsuario: event.target.value});
  };

  onChangeInputMensagem = (event) => {

    this.setState({inputMensagem: event.target.value});
  };

  render() {

    const displayDeMensagens = this.state.mensagens.map((conversa) => {

      return (
        <p>
          <strong>{conversa.usuario} : </strong> {conversa.mensagem}
        </p>
      )
    })

    return(
      <MainContainer>
          <h1>Labe Talk</h1>
        <Funcionalidades>
        {displayDeMensagens}
          <CampoUsuario
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder='Usuário'/>

          <CampoMensagem
            value={this.state.inputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder='Mensagem'/>

          <BotaoEnviar onClick={this.novaMensagem}>Enviar</BotaoEnviar>
        </Funcionalidades>
      </MainContainer>
    )
  }
}

export default App;
