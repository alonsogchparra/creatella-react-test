import { combineReducers } from 'redux';
import IconsReducer from './icons';

const rootReducer = combineReducers({
  icons: IconsReducer
});

export default rootReducer;