import { SET_CURRENT_BUILD_CHAMP, ADD_ITEM_TO_CURRENT_BUILD, REMOVE_ITEM_FROM_CURRENT_BUILD, SAVE_BUILD, CLEAR_CURRENT_BUILD } from '../actions/index';

const defaultState = {
  currentBuild: {
    champion: {},
    items: []
  },
  builds: []
};

export default function BuildsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENT_BUILD_CHAMP:
      return Object.assign({}, state, {
        currentBuild: {
          champion: action.payload,
          items: state.currentBuild.items
        }
      });

    case ADD_ITEM_TO_CURRENT_BUILD:
      return Object.assign({}, state, {
        currentBuild: {
          champion: state.currentBuild.champion,
          items: [ ...state.currentBuild.items, action.payload ]
        }
      });

    case REMOVE_ITEM_FROM_CURRENT_BUILD:
      var newItems = state.currentBuild.items.slice();
      newItems.splice(action.payload, 1);
      return Object.assign({}, state, {
        currentBuild: {
          champion: state.currentBuild.champion,
          items: newItems
        }
      });

    case SAVE_BUILD:
      return Object.assign({}, state, {
        builds: [ ...state.builds, state.currentBuild ]
      });

    case CLEAR_CURRENT_BUILD:
      return Object.assign({}, state, {
        currentBuild: {
          champion: {},
          items: []
        }
      });

    default:
      return state;
  }
}
