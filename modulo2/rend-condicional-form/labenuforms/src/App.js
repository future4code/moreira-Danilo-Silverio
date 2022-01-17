import Etapa1 from './components/Etapa1/Etapa1'
import Etapa2 from './components/Etapa2/Etapa2'
import Etapa3 from './components/Etapa3/Etapa3'
import Final from './components/Final/Final'
import './App.css';
import styled from 'styled-components';
import React from 'react';

const PageForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProximaEtapa = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;
  background-color: rgb(214, 219, 217);
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  telaDeEtapa = () => {

    this.setState({etapa: this.state.etapa + 1})
  }

  render () {

    const renderizarEtapa = () => {

      switch (this.state.etapa) {

        case 1:
          return <Etapa1/>

        case 2:
          return <Etapa2/>
          
        case 3:
          return <Etapa3/>
        
        default:
          return <Final/>
      }
    }

  return (
    <PageForm>
      {renderizarEtapa()}
      <ProximaEtapa onClick={this.telaDeEtapa}>Próxima etapa</ProximaEtapa>
    </PageForm>
  )};
}

export default App;
