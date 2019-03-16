import React from 'react';

export default props => (
    <input {...props.input} className='form-control'
            className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}/> //this "{...props.input}" load all the pre configuration in redux form when you use component in Field(inherited by redux-form)
)