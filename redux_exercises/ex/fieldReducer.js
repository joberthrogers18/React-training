const STATE_INITIAL = { value: 'Opa' }

export default function(state=STATE_INITIAL, action){
    switch(action.type){
        case 'VALUE_CHANGED':
            return { value: action.payload }
        default:
            return state;
    }
}