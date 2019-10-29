import * as actionTypes from '../actions/actionTypes';

const initState = {
  icons: [],
  sortByPrice:[],
  sortBySize: [],
  sortById: [],
  sortByDate: [],
  priceSelected: false,
  sizeSelected: false,
  dateSelected: false,
  idSelected: false,
};

const reducer = (state = initState, action) => {

  switch(action.type) {

    case actionTypes.FETCH_ICONS:
      return {
        ...state,
        icons: state.icons.concat(action.icons),
        sortByPrice: state.icons.concat(action.icons).sort((a,b) => a.price - b.price),
        sortBySize: state.icons.concat(action.icons).sort((a,b) => a.size - b.size),
        sortById: state.icons.concat(action.icons).sort((a,b) => a.id - b.id),
        sortByDate: state.icons.concat(action.icons).sort((a,b) => new Date(a.date) - new Date(b.date)),
        idSelected: true,
        priceSelected: false,
        sizeSelected: false,
        dateSelected: false,
      }

    case actionTypes.SORTED_BY_PRICE:
      return {
        ...state,
        priceSelected: action.priceSelected,
        sizeSelected: false,
        dateSelected: false,
        idSelected: false
      }

    case actionTypes.SORTED_BY_SIZE:
      return {
        ...state,
        sizeSelected: action.sizeSelected,
        priceSelected: false,
        dateSelected: false,
        idSelected: false
      }


    case actionTypes.SORTED_BY_DATE:
      return {
        ...state,
        dateSelected: action.dateSelected,
        priceSelected: false,
        sizeSelected: false,
        idSelected: false
      }
    case actionTypes.SORTED_BY_ID:
      return {
        ...state,
        dateSelected: false,
        priceSelected: false,
        sizeSelected: false,
        idSelected: action.idSelected
      }

    default:
      return state;
  }

}

export default reducer;