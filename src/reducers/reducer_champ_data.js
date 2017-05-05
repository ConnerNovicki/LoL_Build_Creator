import { FETCH_CHAMP_DATA } from '../actions/index';

const CHAMP_IMAGE_ROOT_URL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';

export default function ChampDataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CHAMP_DATA:
      const data = action.payload.data.data;
      var champs = [];
      for (var key in data) {
        var champObj = data[key];
        var champ = {
          name: champObj.name,
          imgUrl: `${CHAMP_IMAGE_ROOT_URL}${champObj.image.full}`,
          id: champObj.id
        }

        champs.push(champ);
      }
      return champs;
    default:
      return state;
  }
}
