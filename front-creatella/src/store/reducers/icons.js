import * as actionTypes from '../actions/actionTypes';

const initState = {
  icons: []
};

const reducer = (state = initState, action) => {

  switch(action.type) {

    case actionTypes.FETCH_ICONS:
      return {
        ...state,
        icons: state.icons.concat(action.icons)
      }

    default:
      return state;
  }

}

export default reducer;