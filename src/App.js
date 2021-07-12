import { Provider } from 'react-redux';
import './App.css';
import Routers from './route/index';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
