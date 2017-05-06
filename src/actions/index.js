import axios from 'axios';

export const FETCH_CHAMP_DATA = 'FETCH_CHAMP_DATA';
export const FETCH_ITEM_DATA = 'FETCH_ITEM_DATA';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_CURRENT_BUILD_CHAMP = 'SET_CURRENT_BUILD_CHAMP';
export const ADD_ITEM_TO_CURRENT_BUILD = 'ADD_ITEM_TO_CURRENT_BUILD';
export const REMOVE_ITEM_FROM_CURRENT_BUILD = 'REMOVE_ITEM_FROM_CURRENT_BUILD';
export const SAVE_BUILD = 'SAVE_BUILD';
export const CLEAR_CURRENT_BUILD = 'CLEAR_CURRENT_BUILD';
export const SET_CURRENT_ACTIVE_BUILD = ' SET_CURRENT_ACTIVE_BUILD';
export const REMOVE_BUILD_FROM_LIST = 'REMOVE_BUILD_FROM_LIST';
export const REMOVE_ALL_BUILDS = 'REMOVE_ALL_BUILDS';

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

export function setCurrentActiveBuild(build) {
  return {
    type: SET_CURRENT_ACTIVE_BUILD,
    payload: build
  }
}

export function removeBuildFromList(build) {
  return {
    type: REMOVE_BUILD_FROM_LIST,
    payload: build
  }
}

export function removeAllBuilds() {
  return {
    type: REMOVE_ALL_BUILDS
  }
}
