import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './Imagens/foto.png'
import Email from './Imagens/email.png'
import Endereco from './Imagens/location.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Danilo G. Silvério" 
          descricao="Um estudante de Desenvolvimento Web Full Stack com o objetivo de se especializar em Front End/UX/UI. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <CardPequeno
        imagem = {Email}
        email = "E-mail:"
        contato = "danilosilverio@outlook.com.br"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem = {Endereco}
        email = "Endereço:"
        contato = "Rua Valmir Luiz Gubert, Nº 73 | Curitiba - PR"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://mgbcontabil.com.br/img/logo-mgbcontabil.png" 
          nome="MGB CONTABILIDADE" 
          descricao="Auxiliar Contábil - Fornecer assistência contábil e administrativa ao departamento de contabilidade, classificação e realização de conciliações contábeis, 
          registro de lançamentos contábeis e atualização de planilhas de controle." 
        />
        
        <CardGrande 
          imagem="https://www.votorantim.com.br/wp-content/uploads/2021/04/Votorantim-Open-Graph.png" 
          nome="VOTORANTIM S.A" 
          descricao="Estágio Contábil - Auxiliar o time de contabilidade nas atividades contábeis/tributárias do dia a dia.
          . Execução de controles relacionados a Imobilizado e Intangível." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
