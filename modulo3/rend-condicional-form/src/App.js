import React, { useState } from "react";
import { BtnConfirm } from "./style"
import { PrimeiraEtapa } from "./components/PrimeiraEtapa";
import { SegundaEtapa } from "./components/SegundaEtapa";
import { TerceiraEtapa } from "./components/TerceiraEtapa";
import { Container } from "./style";

function App() {
  
  const [selectOpcao, setSelecaoOpcoes] = useState([
    "Escolha uma Opção", "Ensino Médio Incompleto",
    "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"
  ])

  const [renderForm, setRenderForm] = useState(PrimeiraEtapa)
  const trocarForm = () => {
    if (BtnConfirm) {
      setRenderForm(SegundaEtapa)
    } else if (BtnConfirm) {
      setRenderForm(TerceiraEtapa)
    }
    
  }
  console.log(selectOpcao)
  return (
    <Container arrayDiOpcao={selectOpcao}>
      {renderForm}
      {/* <TerceiraEtapa/> */}
      <BtnConfirm onClick={trocarForm}>Proxima Etapa</BtnConfirm>
    </Container>
  );
}

export default App;
