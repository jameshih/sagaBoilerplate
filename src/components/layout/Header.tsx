import React, { FC } from 'react';
import Container from '../core/Container';
import { A } from 'hookrouter';

const Header: FC<{}> = () => {
    return (
        <Container className={'h-20 fixed top-0 bg-gray-800 text-white'}>
            <A className='mx-2' href='/'>
                Home
            </A>
            <A className='mx-2' href='/profile'>
                Profile
            </A>
        </Container>
    );
};

export default Header;
