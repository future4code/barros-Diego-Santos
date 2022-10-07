console.log("exercicio 3");

const acounts = [
  {email: "astrodev@labenu.com",
   password: "abc123"
  },
  {email: "bananinha@gmail.com",
   password: "bananinha"
  }
]

const login = (email, pass) => {
  const seeEmail = acounts.find( acount => acount.email === email) // verificcacao de email //
  const seePasswod =  acounts.find( acount => acount.password === pass) // verificaçao de senha //
  if(seeEmail && seeEmail.email && seePasswod && seePasswod.password) {
    return console.log("Login bem-sucedido")
  }else if(seeEmail === undefined){
    return console.log("e-mail inválido")
  }else if(seePasswod === undefined){
    return console.log("senha incorreta")
  }
  // console.log(seeEmail.password.length)
}
login("astrodev@labenu.com","abc123")
