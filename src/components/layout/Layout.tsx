import React, { FC } from 'react';
import Container from '../core/Container';

const Layout: FC<{}> = ({ children }) => {
    return (
        <Container className={'h-screen'}>
            <>{children}</>
        </Container>
    );
};

export default Layout;
