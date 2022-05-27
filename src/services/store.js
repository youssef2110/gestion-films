import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


export default function configureStore() {
  
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
    return applyMiddleware(sagaMiddleware);
  };

  const store = createStore(
    rootReducer,
    getMiddleware(),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}