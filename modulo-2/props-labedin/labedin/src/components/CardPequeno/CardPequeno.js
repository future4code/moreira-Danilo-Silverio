import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
                <p>{ props.contato }</p>
            </div>
        </div>
    )
}

export default CardPequeno;