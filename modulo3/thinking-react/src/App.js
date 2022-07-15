import React, { useState } from 'react';
import { DadosProdutos } from './MockDeDados';
import
 {BotaoAdd, Container, ContainerInput, FormFiltro,
  ImgProduto,Contador,FiltroProduto,
  InputFiltro, LegendaInput, SectionCarrinho, SectionCatalogo, SectionFiltro,
  Titulo,
  DivConteudoCatalogo,
  DivContador} 
from './style'



function App() {

const [listaProdutos, setListaProdutos] = useState(DadosProdutos)
const [carrinhoProd, setCarrinhoProd] = useState(DadosProdutos)


  const AddProduct = () => {
    
    const adicionarProd = [listaProdutos.nome]
    setCarrinhoProd(adicionarProd)
  }
  

  const exibirListaProdutos = listaProdutos.map( (conteudo, index) => {
    return (
      <div key={index}>
        <ImgProduto src={conteudo.foto} />
        <p>{conteudo.nome}</p>
        <p>R$: {conteudo.valor},00</p>
        <BotaoAdd onClick={AddProduct}>
          Adicionar ao carrinho
        </BotaoAdd>
      </div>
    )
  })

  const exibirProdutosCarrinho = carrinhoProd.map( (produto,index) => {
    return (
    <>
      <p>{produto.nome} {produto.valor}</p>
    </>
   )
  })




  return (
    <Container>
      <SectionFiltro>
        <Titulo>Filtro</Titulo>
        <FormFiltro>
          <ContainerInput>
            <LegendaInput>Valor mínimo:</LegendaInput>
            <InputFiltro
              type='number'
            />
          </ContainerInput>

          <ContainerInput>
            <LegendaInput>Valor máximo:</LegendaInput>
            <InputFiltro 
              type='number'
            />
          </ContainerInput>

          <ContainerInput>
            <LegendaInput>Buscar por nome:</LegendaInput>
            <InputFiltro />
          </ContainerInput>
        </FormFiltro>
      </SectionFiltro>

      <DivConteudoCatalogo>
        <DivContador>
          <Contador>Quantidade de Produtos:</Contador>
          <FiltroProduto>
            <option>Decrescente</option>
            <option>Crescente</option>
          </FiltroProduto>
        </DivContador>
      <SectionCatalogo>
        {exibirListaProdutos}
      </SectionCatalogo>

      </DivConteudoCatalogo>

      <SectionCarrinho>
        <Titulo>Carrinho</Titulo>
        {exibirProdutosCarrinho}
      </SectionCarrinho>
    </Container>
  )
}

export default App;
