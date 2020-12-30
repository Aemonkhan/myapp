import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <AddTodo />
    </div>
    </Provider>
  );
}

export default App;
