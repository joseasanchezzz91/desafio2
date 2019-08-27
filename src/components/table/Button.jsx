import React from 'react'


const Button=(props)=>(
    <button className={"btn-primary"} onClick={props.event}>{props.children}</button>
);

export default Button;