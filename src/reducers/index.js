import { combineReducers } from 'redux';
import BuildsReducer from './reducer_builds';
import ChampDataReducer from './reducer_champ_data';
import ItemDataReducer from './reducer_item_data';
import VisibilityFilterReducer from './reducer_visibility_filter';

const rootReducer = combineReducers({
  builds: BuildsReducer,
  champData: ChampDataReducer,
  itemData: ItemDataReducer,
  visibilityFilter: VisibilityFilterReducer
});

export default rootReducer;
