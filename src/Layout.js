import React from 'react';
import Button from './Button';
import Text from './Text';
import ImageWithTitle from './ImageWithTitle';
import Table from './Table';
import Pagination from './Pagination/Pagination';

const Layout = () => {
    const handleButtonClick = () => {}
    return (
        <div>
            <Text message={"Hi"}></Text>
            <Text message={"Lorem Ipsum doller sit amet, consectetur adipiscing elit"}></Text>
            <ImageWithTitle />
            <Table />
            <Pagination />
            <Button handleButtonClick={handleButtonClick}/>
        </div>
    )
}
export default  Layout;