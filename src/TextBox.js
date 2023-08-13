import React, { useState, useRef } from 'react';
import useAutosizeTextArea from './useAutosizeTextArea';
import Button from './Button';
import Text from './Text';
import ImageWithTitle from './ImageWithTitle';

export default function TextBox() {
    const [value, setValue] = useState('');
    const [textMessages, settextMessages] = useState([])
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef.current, value);
    const handleChange = (evt) => {
        const val = evt.target?.value;
        setValue(val);
    };
    const handleButtonClick = () => {
        let newMessages = [...textMessages, value];
        settextMessages(newMessages)
        setValue('')
    }
    return (
        <div>
            {textMessages.length > 0 && textMessages.map(message => <Text message={message}></Text>)}
            <textarea
                id="review-text"
                onChange={handleChange}
                ref={textAreaRef}
                rows={1}
                value={value}
            />
            <Button handleButtonClick={handleButtonClick}/>
            <ImageWithTitle />
        </div>
    );
}
