import React, { useEffect, useState } from 'react';
import './Pagination.css'

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {

    }, [currentPage])
    const onNext = () => {
        setCurrentPage(prevState => prevState + 1)
    };

    const onPrevious = () => {
        if(currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
        }
    };
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <ul className='pagination-container'>
            <li className={currentPage > 1 ? 'pagination-item' : "pagination-item disabled"} onClick={onPrevious}>
                <div className="arrow left" />
            </li>
            {pages.map(pageNumber => {
                if (pageNumber === currentPage) {
                    return <li className='dot dot-active' onClick={() => setCurrentPage(pageNumber)}>&#9679;</li>;
                } else {
                    return <li className='dot dot-inactive' onClick={() => setCurrentPage(pageNumber)}>&#9679;</li>;
                }
            })}
            <li className={currentPage < pages.length ? 'pagination-item' : "pagination-item disabled"} onClick={onNext}>
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
