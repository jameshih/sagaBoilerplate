import React, { FC, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';
import './styles/build/index.css';
import LoadingSpinner from './components/core/LoadingSpinner';
import { Header, Footer, Layout } from './components/layout';
import NotFound from './components/pages/NotFound';
const Home = lazy(() => import('./components/pages/Home'));

const routes = {
    '/': () => <Home />,
};

const Root: FC<{}> = () => {
    const routeResult = useRoutes(routes);
    return (
        <Provider store={store}>
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
                <Layout>{routeResult || <NotFound />}</Layout>
            </Suspense>
            <Footer />
        </Provider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
