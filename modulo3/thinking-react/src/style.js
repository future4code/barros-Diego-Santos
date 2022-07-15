import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    justify-content: space-evenly;
    font-size: 17px;

    box-sizing: border-box;
    height: calc(100vh - 2px);

`

export const Titulo = styled.h2 `
    text-align: center;
`

export const Contador = styled.span ``
//------------///---------------///---------
export const SectionFiltro = styled.div `
    width: 300px;
    height: 100%;
    border: 1px solid #000;
`

export const FormFiltro = styled.form `
    width: 20vw ;
    font-size: 17px;
    margin: 0 auto;
`

export const ContainerInput = styled.fieldset `
    display: flex;
    flex-direction: column;
    border: 0;
    max-width: 16vw;
`

export const LegendaInput = styled.label ``

export const InputFiltro = styled.input `
    font-size: 16px;
    max-width: 250px;
    padding: 5px;
`


//--------------///-----------///------------
export const DivConteudoCatalogo = styled.div `
    width: 880px;
`

export const SectionCatalogo = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2,400px);
    grid-gap: 10px;
    
`

export const DivContador = styled.div `
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`
export const Produto = styled.div `
    width: 271px;
`

export const ImgProduto = styled.img `
    width: 100%;
    height: 50%;
    object-fit: cover;
`

export const FiltroProduto = styled.select `
    width: 120px;
    height: 30px;
    font-size: 17px;
`

export const BotaoAdd = styled.button `
    
`

//-----------------///----------//--------------

export const SectionCarrinho = styled.div `
    width: 300px;
    height: 100%;
    border: 1px solid #000;
`