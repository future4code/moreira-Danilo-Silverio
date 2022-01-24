import React from "react";
import styled from "styled-components";


const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Mensagem = styled.p`
  font-size: 20px;
`

class Final extends React.Component {
  
  render(){

  return (
    <FinalContainer>
      <h1>O formulário terminou!</h1>
        <Mensagem>Muito obrigado por participar! Entraremos em contato!</Mensagem>
    </FinalContainer>
      
  )};
}
  
export default Final;