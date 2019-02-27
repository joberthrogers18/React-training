import { combineReducers } from 'redux';

const rootReducer = combineReducers({ //combine all reducers
    todo: () => ({
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
    })
})

export default rootReducer;