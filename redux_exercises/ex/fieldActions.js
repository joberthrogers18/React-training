export function changeValue(event){
    console.log('changedValue');

    return {
        type: 'VALUE_CHANGED', //always in return of action creator must be return a object with flag "type" 
        payload: event.target.value
    }
}