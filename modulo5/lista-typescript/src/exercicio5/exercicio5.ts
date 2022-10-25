// Considerando o array de usuários abaixo, crie uma função que receba este array como 
 // parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 
type Usuarios = {
  name: string ,
  email: string ,
  role: string 
};

const contasUsuarios: Usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
];


const pegarEmail = (contas: Usuarios[]) :string[] => {
  const adminEmail: Usuarios[] = contas.filter((conta: Usuarios): boolean => conta.role === "admin")
  const email: string[] = adminEmail.map( (email: Usuarios): string => email.email)
  return email
}
console.log(pegarEmail(contasUsuarios))