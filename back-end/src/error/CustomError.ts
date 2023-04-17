export class CustomError extends Error{
    constructor(public statusCode:number, public message:string){
        super(message)
    }
}

export class InvalidBody extends CustomError{
    constructor(){
        super(400, "Dados inválidos")
    }
}
