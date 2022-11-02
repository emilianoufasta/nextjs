import '../styles/globals.css'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { catsSaga } from '../src/redux/catsSaga';
import { catsReducer } from '../src/redux/catsState';
import { Provider } from 'react-redux';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga, logger]
});

saga.run(catsSaga);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
