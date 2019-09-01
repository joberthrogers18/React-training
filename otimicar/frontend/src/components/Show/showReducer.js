const INITIAL_STATE = {
  resp: []
}

export default (state=INITIAL_STATE, action) => {

  switch(action.type){
    case 'RENDER_RESPONSABLES':
      return {resp: action.payload}
    default:
      return state
  }

}