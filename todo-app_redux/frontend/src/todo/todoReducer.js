const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },{
        _id: 2,
        description: 'Reunião com a equipe as 10h',
        done: false 
    }, {
        _id: 3,
        description: 'Consulta medica depois do almoco',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'DESCRIPTION CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            console.log(action.payload);
            return {...state, list: action.payload.data}
        default:
            return state
    }

}