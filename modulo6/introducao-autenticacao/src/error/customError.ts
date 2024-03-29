export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
};

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
};

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
};

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
};

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuario não encontrado")
    }
};
export class Unauthorize extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}