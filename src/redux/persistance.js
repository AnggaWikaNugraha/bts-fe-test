import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import Variable from './variable';

const config = {
  key: 'root',
  storage,
  whitelist: Variable.WHITE_LIST,
};

const appReducer = persistCombineReducers(
  config,
  reducers,
);

export default appReducer;
