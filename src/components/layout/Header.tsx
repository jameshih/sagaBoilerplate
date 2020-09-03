import React, { FC } from 'react';
import Container from '../core/Container';

const Header: FC<{}> = () => {
    return <Container className={'h-20 fixed top-0 bg-gray-800 text-white'}>header</Container>;
};

export default Header;
