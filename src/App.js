import React, { Suspense, useEffect } from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// store
import Redux from './redux/store';
// variable
import ROUTERS from './routes';
// component
import PrivateApp from './PrivateApp';

function App() {
  return (
    <Suspense fallback={<>Loading..</>}>
      <Provider store={Redux.store}>
        <PersistGate loading={null} persistor={Redux.persistor}>
          <div>
            <div>
              {/* <div className="top-barback"></div> */}
              <BrowserRouter>
                <Switch>
                  {
                    ROUTERS.map(({ isPrivate, Component, ...route }, i) => {
                      if (isPrivate) {
                        return (
                          <PrivateApp key={i} {...route}>
                            <Component/>
                          </PrivateApp>
                        );
                      }
                      return (
                        <Route key={i} {...route}>
                          <Component/>
                        </Route>
                      );
                    })
                  }
                  <Route path="*">
                    <>No match link</>
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
          {/* <Notification /> */}
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
