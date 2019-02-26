export function changeValue(event){

    return {
        type: 'VALUE_CHANGED', //always in return from action creator must be return a object with flag "type" 
        payload: event.target.value // payload can be any "flag", (call payload just because mean a return from action dispatcher)
    }
}