import React from 'react'
import { CorpoPagina } from '../style'
import { Cabecalho, ImagemLogo, TituloPagina } from '../style'
import { SecaoPrincipal, Formulario, ContainerInput, PalavraInput, FormularioInput, Botao} from '../style'
import { RodaPe, Copyright, LinkLabenu } from '../style'


import logoLabenu from '../components/picture.png'

export const ConteudoPagina = () => {
    return (
        <CorpoPagina>
            <Cabecalho>
                <ImagemLogo ImgLogo={logoLabenu}/>
                <TituloPagina>LabZap</TituloPagina>
            </Cabecalho>
            <SecaoPrincipal>
                <Formulario>
                    <ContainerInput>
                        <PalavraInput>Remetente:</PalavraInput>
                        <FormularioInput/>
                    </ContainerInput>
                    <ContainerInput>
                        <PalavraInput>Mensagem:</PalavraInput>
                        <FormularioInput/>
                    </ContainerInput>
                    <Botao>Enviar Comentario</Botao>
                </Formulario>
            </SecaoPrincipal>
            <RodaPe>
                <Copyright>
                    Copyright © / 
                    <LinkLabenu target={'_blanck'} href='https://www.labenu.com.br/?gclid=CjwKCAjwk_WVBhBZEiwAUHQCmRzbPlgsyC_xYXRpd8wbx4mm9CSZVltA0neRDdZg3Di-XQSFKukVBRoCg24QAvD_BwE'> Labenu </LinkLabenu>
                    | Diego Rios / All rights reserved:
                </Copyright>
                <Copyright>Rua.Logo-Ali, 666, Conjunto 999 Batatinhas, CEP 06660-999</Copyright>
            </RodaPe>
        </CorpoPagina>
    )
}