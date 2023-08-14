import React from 'react';
import './Text.css'
const Text = (props) => {
    return (
        <div className='text-messages'>{props.message}</div>
    )
}

export default Text;