import { Provider } from 'react-redux';
import './App.css';
import Routers from './route/index';
import store from './app/store';
import {persistor} from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Routers />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
