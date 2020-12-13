import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import store from './store';
import './styles/build/index.css';

import NotFound from './components/pages/NotFound';
const Nav = lazy(() => import('./components/layout/Nav'));
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<></>}>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
