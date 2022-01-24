import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Projeto Semanal',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now()+1, // Explicação abaixo
          texto: 'Exercício Aula do dia',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: ''
    }

    salvarLocalStorage = () => {
      localStorage.setItem("id", this.state.tarefas);
      localStorage.setItem("texto", this.state.tarefas);
      localStorage.setItem("completa", this.state.tarefas);
    };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tarefas === this.state.tarefas) {
      this.salvarLocalStorage();
      console.log("deu update no perfil");
    }
  };
  
  buscarLocalStorage = () => {
    const id = localStorage.getItem("id");
    const texto = localStorage.getItem("texto");
    const completa = localStorage.getItem("completa");

    this.setState({
      id: id || "",
      texto: texto || "",
      completa: completa || ""
    });
  };

  componentDidMount = () => {

    this.buscarLocalStorage();
  
  };

  onChangeInput = (event) => {
    
    this.setState({inputValue: event.target.value})
   
  }

  criaTarefa = () => {
  
    const novaTarefa = {

      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const tarefaAdicionada = [...this.state.tarefas, novaTarefa]
    this.setState({
      tarefas: tarefaAdicionada,
      inputValue: ""})
  }

  selectTarefa = (id) => {

    const statusTarefa = this.state.tarefas.map((tarefa) => {

      if(id === tarefa.id){
        
        const novoStatus = {
          ...tarefa,
          completa: tarefa.completa
        }
        return novoStatus 
      }else{
        return tarefa
      }
    });

    this.setState({tarefas: statusTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
