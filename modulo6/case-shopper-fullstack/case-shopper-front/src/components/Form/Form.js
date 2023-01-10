import React from "react";
import { MyOrderForm } from "./styleForm";


const Form = () => {

  return  (
    <MyOrderForm>
      <div id="selec-client">{/* cliente*/}
        <label htmlFor="client">Nome Do Cliente</label>
        <input id="client" list="dataClient"/>
        <datalist id="dataClient">
          <option>Jr</option>
          <option>Diego</option>
          <option>Fay</option>
          <option>Isra</option>
        </datalist>
        <button>Confirmar</button>
      </div>
       
      <div id="select-product"> {/* produto*/}
        <label htmlFor="product">Produto</label>
        <input id="product" list="dataProduct"/>
        <datalist id="dataProduct">
          <option>feijao</option>
          <option>arroz</option>
          <option>banana</option>
          <option>manga</option>
        </datalist>
        <label htmlFor="qty">Quantidade</label>
        <input id="qty" type ="number"/>
        <p>R$: 1000</p>
        <button>Ok</button>
      </div>

      <div id="order"> {/* pedido/Order */}
        <label htmlFor="deliveryDate">Data de entrega (DD/MM/AAAA)</label>
        <input id="deliveryDate"/>
        <button>Confirmar Pedido</button>
      </div>
    </MyOrderForm>
  )


}

export default Form;