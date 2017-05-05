import axios from 'axios';

// Visibility filter types
export const CHAMPION_FILTER = 'CHAMPION_FILTER';
export const ITEM_FILTER = 'ITEM_FILTER';
export const NO_FILTER = 'NO_FILTTER';

export const FETCH_CHAMP_DATA = 'FETCH_CHAMP_DATA';
export const FETCH_ITEM_DATA = 'FETCH_ITEM_DATA';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_CURRENT_BUILD_CHAMP = 'SET_CURRENT_BUILD_CHAMP';
export const ADD_ITEM_TO_CURRENT_BUILD = 'ADD_ITEM_TO_CURRENT_BUILD';
export const REMOVE_ITEM_FROM_CURRENT_BUILD = 'REMOVE_ITEM_FROM_CURRENT_BUILD';
export const SAVE_BUILD = 'SAVE_BUILD';
export const CLEAR_CURRENT_BUILD = 'CLEAR_CURRENT_BUILD';

const API_KEY = 'RGAPI-4fe23761-e8c8-47fb-8d81-f6d669f8f3d1';
const CHAMP_URL = 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/champion?champData=all';
const ITEM_URL = 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/item?itemListData=all';

export function fetchChampData() {
  // Use axios to make api request

  const url = `${CHAMP_URL}&api_key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_CHAMP_DATA,
    payload: request
  }
}

export function fetchItemData() {

  const url = `${ITEM_URL}&api_key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_ITEM_DATA,
    payload: request
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export function setCurrentBuildChamp(champ) {
  return {
    type: SET_CURRENT_BUILD_CHAMP,
    payload: champ
  }
}

export function addItemToCurrentBuild(item) {
  return {
    type: ADD_ITEM_TO_CURRENT_BUILD,
    payload: item
  }
}

export function removeItemFromCurrentBuild(item_id) {
  return {
    type: REMOVE_ITEM_FROM_CURRENT_BUILD,
    payload: item_id
  }
}

export function saveBuild() {
  return {
    type: SAVE_BUILD
  }
}

export function clearCurrentBuild() {
  return {
    type: CLEAR_CURRENT_BUILD
  }
}
