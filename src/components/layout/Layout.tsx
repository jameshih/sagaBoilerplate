import React, { FC } from 'react';
import { Container } from '../core/Container';

export const Layout: FC<{}> = ({ children }) => {
    return (
        <>
            <Container className={'h-20 fixed top-0 bg-gray-800 text-white'}>header</Container>
            <Container className={'h-screen'}>
                <div>{children}</div>
            </Container>
            <Container className={'fixed bottom-0'}>footer</Container>
        </>
    );
};
