import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getIcons = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(isLoading());
      setTimeout(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
          dispatch(fetchIcons(res.data));
        })
      }, 2000);
    }, 0);
  }
}

export const fetchIcons = (icons) => {
  return {
    type: actionTypes.FETCH_ICONS,
    icons,
    isLoading: false
  }
}

export const getSortByPrice = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(isLoading());
      setTimeout(() => {
        dispatch(sortedByPrice());
      }, 2000);
    }, 0);
  }
}

export const sortedByPrice = () => {
  return {
    type: actionTypes.SORTED_BY_PRICE,
    priceSelected: true,
    isLoading: false
  }
}

export const getSortBySize = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(isLoading());
      setTimeout(() => {
        dispatch(sortedBySize());
      }, 2000);
    }, 0);
  }
}

export const sortedBySize = () => {
  return {
    type: actionTypes.SORTED_BY_SIZE,
    sizeSelected: true,
    isLoading: false
  }
}

export const getSortByDate = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(isLoading());
      setTimeout(() => {
        dispatch(sortedByDate());
      }, 2000);
    }, 0);
  }
}

export const sortedByDate = () => {
  return {
    type: actionTypes.SORTED_BY_DATE,
    dateSelected: true,
    isLoading: false
  }
}

export const getSortById = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(isLoading());
      setTimeout(() => {
        dispatch(sortedById());
      }, 2000);
    }, 0);
  }
}

export const sortedById = () => {
  return {
    type: actionTypes.SORTED_BY_ID,
    idSelected: true
  }
}

export const isLoading = () => {
  return {
    type: actionTypes.LOADING_ICONS,
    isLoading: true
  }
}

export const addIcons = (icons) => {
  return {
    type: actionTypes.ADDING_ICONS,
    icons
  }
}

export const removeIcon = (id) => {
  return {
    type: actionTypes.REMOVE_ICON,
    id
  }
}

export const removeAllIcons = () => {
  return {
    type: actionTypes.REMOVE_ALL_ICONS
  }
}