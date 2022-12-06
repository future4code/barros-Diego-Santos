import axios from "axios";
import { EnderecoInfo } from "../types";

const getAddressInfo = async (cep:string) => {

  try {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const infos:EnderecoInfo = {
      cidade: data.localidade,
      bairro: data.bairro,
      estado: data.uf,
      logradouro: data.logradouro
    }
    return infos;
  }catch(error:any){
    throw new Error(error.message);
  }
}; 

export default getAddressInfo