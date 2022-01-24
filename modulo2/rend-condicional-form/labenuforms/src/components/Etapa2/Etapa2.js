import React from "react";
import styled from "styled-components";

const Etapa2Container = styled.div`
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

class Etapa2 extends React.Component {
  
  render(){

  return (
    <Etapa2Container>
      <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <div>
          <Perguntas>5. Qual a sua graduação?</Perguntas>
          <Respostas></Respostas>
          <Perguntas>6. Qual é a sua unidade de ensino?</Perguntas>
          <Respostas></Respostas>
        </div>
    </Etapa2Container>
      
  )};
}
  
export default Etapa2;