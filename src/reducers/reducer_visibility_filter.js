import { SET_VISIBILITY_FILTER } from '../actions/index';
import { NO_FILTER } from '../actions/index';

export default function VisibilityFilterReducer(state = NO_FILTER, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
