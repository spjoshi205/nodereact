import React from 'react';

const product = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p><img src={props.imageUrl} width="50px" /></p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <hr/>
        </div>
    )
}

export default product;