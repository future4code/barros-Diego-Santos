import React from 'react'
import { CommentContainer,InputComentario } from '../../style'


export function SecaoComentario(props) {
	
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.inputText}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}