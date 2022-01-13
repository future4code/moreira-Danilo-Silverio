import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentar: ""
	}

	onChangeComentario = (event) => {

		this.setState({comentar: event.target.value})

	}

	render() {
		console.log("Comentário", this.state.comentar)
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentar}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
