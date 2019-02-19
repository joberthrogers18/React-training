import React from 'react';
import {childreWithProps } from '../utils/reactUtils';

export default props => (
    <div>
        {/* // all inside the tag from this component go to props.children place  */}
       {/* {React.cloneElement(props.children, {...props})}*/} {/* this props gonna pass to the member family*/}
        
        { childreWithProps(props.children, props) } {/*This option it was made to severals child inside tag element recieve*/}
    </div>
)