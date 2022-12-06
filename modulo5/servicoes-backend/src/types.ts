export type Endereco = {
  cep: string,
  logradouro: string,
  numero: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  estado: string
};

export type EnderecoInfo = {
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string
}