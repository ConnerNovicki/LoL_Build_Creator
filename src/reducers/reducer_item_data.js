import { FETCH_ITEM_DATA } from '../actions/index';

const ITEM_IMAGE_ROOT_URL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/';

export default function ItemDataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ITEM_DATA:
      const data = action.payload.data.data;
      var items = [];
      for (var key in data) {

        var itemObj = data[key];
        var item = {
          name: itemObj.name,
          imgUrl: `${ITEM_IMAGE_ROOT_URL}${itemObj.image.full}`,
          id: itemObj.id
        }
        items.push(item);
      }
      return items;
    default:
      return state;
  }
}
