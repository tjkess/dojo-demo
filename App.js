import {Provider} from 'react-redux';
import reducer from './store/reducers/store';
import {createStore, combineReducers} from 'redux';
import TabNavigator from './tabNavigator';


const root = combineReducers({
  main: reducer,
});

const store = createStore(root);

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
