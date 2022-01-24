import React from "react";
import styled from "styled-components";

const Etapa1Container = styled.div`
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

class Etapa1 extends React.Component {
  
  render(){

  return (
    <Etapa1Container>
      <h1>Etapa 1 - Dados Gerais</h1>
        <div>
          <Perguntas>1. Qual o seu nome?</Perguntas>
          <Respostas></Respostas>
          <Perguntas>2. Qual a sua idade?</Perguntas>
          <Respostas></Respostas>
          <Perguntas>3. Qual o seu email?</Perguntas>
          <Respostas></Respostas>
          <Perguntas>4. Qual a sua escolaridade?</Perguntas>
          <label></label>
          <Select>
          <option selected disabled value="">Selecione...</option>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
          </Select>
        </div>
    </Etapa1Container>

      
  )};
}
  
export default Etapa1;
  