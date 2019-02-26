//Actions creator
export function inc(){
    return {
        type: 'INC'
    }
}

export function dec(){
    return {
        type: 'DEC'
    }
}

export function stepChange(event){
    return {
        type: "STEP_CHANGE",
        payload: event.target.value
    }
}