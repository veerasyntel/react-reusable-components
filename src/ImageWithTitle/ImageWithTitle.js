import React from 'react';
import img1 from './logo192.png';
import './ImageWithTitle.css'
const ImageWithTitle = () => {
    return (
        <div className='ImageWithTitle'>
            <div className='image'>
                <img src={img1} alt=""></img>
            </div>
            <h5>Title</h5>
            <div>Lorem Ipsum doller sit amet, consectetur adipiscing elit.</div>
        </div>
    )
}
export default  ImageWithTitle;