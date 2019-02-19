import React from 'react';

function childreWithProps(children, props){
    return React.Children.map(children,
         child => React.cloneElement(child, {...props}))
}

export {childreWithProps}