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