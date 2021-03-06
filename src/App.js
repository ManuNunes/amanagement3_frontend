import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyles />
      </>
    </Provider>
  );
}
