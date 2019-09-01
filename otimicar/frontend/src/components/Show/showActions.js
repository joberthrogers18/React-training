import axios from 'axios';

export const updateResponsables = values => {  
  return {
    type: 'RENDER_RESPONSABLES',
    payload: values
  }
};

export const fetchAllResponsables = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:3333/responsable`)
          .then(response => {
            dispatch(updateResponsables(response.data));
          }).catch( error => {
            console.log('passou aqui');
            throw(error);
          })
  };
}
