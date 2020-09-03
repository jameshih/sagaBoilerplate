import React, { FC } from 'react';
import Container from '../core/Container';

const Layout: FC<{}> = ({ children }) => {
    return (
        <Container className={'h-screen'}>
            <div>{children}</div>
        </Container>
    );
};

export default Layout;
