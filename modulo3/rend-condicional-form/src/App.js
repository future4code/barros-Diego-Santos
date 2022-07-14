import React, { useState } from "react";
import { BtnConfirm } from "./style"
import { PrimeiraEtapa } from "./components/PrimeiraEtapa";
import { SegundaEtapa } from "./components/SegundaEtapa";
import { TerceiraEtapa } from "./components/TerceiraEtapa";
import { Container } from "./style";

function App() {

  const [renderForm, setRenderForm] = useState(PrimeiraEtapa)
  const [botao, setBotao] = useState(1)
  const trocarForm = () => {
    if (botao === 1) {
      setBotao(+ 1)
      setRenderForm(SegundaEtapa)
    } if (botao === 2 ) {
      setRenderForm(TerceiraEtapa)
    }
    
  }

  return (
    <Container>
      {renderForm}
      {/* <TerceiraEtapa/> */}
      <BtnConfirm onClick={trocarForm}>Proxima Etapa</BtnConfirm>
    </Container>
  );
}

export default App;
