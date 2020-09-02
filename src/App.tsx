import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./styles/build/index.css";
import Loading from "./common/components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
