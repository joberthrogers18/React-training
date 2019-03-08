const INITIAL_STATE = {selected: '', visible: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload}
        case 'TAB_SHOWED':
            console.log(action.payload)
            return {...state, visible : action.payload}
        default:
            return state;
    }
}