import React from 'react';
import { Field, reduxForm } from 'redux-form';

let TesteForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text"/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default reduxForm({
  form: 'teste'
})(TesteForm);



