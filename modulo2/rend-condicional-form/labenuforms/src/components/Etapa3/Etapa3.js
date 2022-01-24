import React from "react";
import styled from "styled-components";

const Etapa3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Perguntas = styled.p`
  font-size: 20px;
`
const Respostas = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
`

const Select = styled.select`
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid gray;
`

class Etapa3 extends React.Component {
  
  render(){

  return (
    <Etapa3Container>
      <h1>Etapa 3 - Informações gerais de ensino</h1>
        <div>
          <Perguntas>7. Por que você não terminou a graduação?</Perguntas>
          <Respostas></Respostas>
          <Perguntas>8. Você fez algum curso complementar?</Perguntas>
          <label></label>
          <Select>
          <option selected disabled value="">Selecione...</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
          </Select>
        </div>
    </Etapa3Container>
      
  )};
}
  
export default Etapa3;