import React from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import ImageWithTitle from '../ImageWithTitle/ImageWithTitle';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import './Layout.css'

const Layout = () => {
    return (
        <div className='layoutDiv'>
            <Text message={"Hi"}></Text>
            <Text message={"Lorem Ipsum doller sit amet, consectetur adipiscing elit"}></Text>
            <ImageWithTitle />
            <Table />
            <Pagination />
            <Button />
        </div>
    )
}
export default  Layout;