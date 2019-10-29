import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getIcons = () => {
  return dispatch => {
    axios.get('http://localhost:3000/products')
    .then(res => {
      console.log('Fetching Icons', res.data);
      dispatch(fetchIcons(res.data));
    })
  }

}

export const fetchIcons = (icons) => {
  return {
    type: actionTypes.FETCH_ICONS,
    icons
  }
}

export const sortedByPrice = () => {
  return {
    type: actionTypes.SORTED_BY_PRICE,
    priceSelected: true
  }
}

export const sortedBySize = () => {
  return {
    type: actionTypes.SORTED_BY_SIZE,
    sizeSelected: true
  }
}

export const sortedByDate = () => {
  return {
    type: actionTypes.SORTED_BY_DATE,
    dateSelected: true
  }
}

export const sortedById = () => {
  return {
    type: actionTypes.SORTED_BY_ID,
    idSelected: true
  }
}