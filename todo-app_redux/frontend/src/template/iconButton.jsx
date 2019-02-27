import React from 'react';
import If from './if';

export default props => (
    <If test={!props.hide}>
        <button className={'mr-1 ml-1 mb-2 btn btn-' + props.style} 
        onClick={props.onClick}> 
            <i className={'fa fa-'+props.icon}></i>
        </button>
    </If>

)