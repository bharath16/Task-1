import React from 'react';

const Message = (props)=>{
    console.log(props)
    return <h1>'hello {props.name}'</h1>
};

export default Message;