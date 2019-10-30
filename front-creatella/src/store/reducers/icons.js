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
  isLoading: true,
  iconsAdded: [],
  total:0,
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
        isLoading: action.isLoading
      }

    case actionTypes.SORTED_BY_PRICE:
      return {
        ...state,
        priceSelected: action.priceSelected,
        sizeSelected: false,
        dateSelected: false,
        idSelected: false,
        isLoading: action.isLoading
      }

    case actionTypes.SORTED_BY_SIZE:
      return {
        ...state,
        sizeSelected: action.sizeSelected,
        priceSelected: false,
        dateSelected: false,
        idSelected: false,
        isLoading: action.isLoading
      }


    case actionTypes.SORTED_BY_DATE:
      return {
        ...state,
        dateSelected: action.dateSelected,
        priceSelected: false,
        sizeSelected: false,
        idSelected: false,
        isLoading: action.isLoading
      }
    case actionTypes.SORTED_BY_ID:
      return {
        ...state,
        dateSelected: false,
        priceSelected: false,
        sizeSelected: false,
        idSelected: action.idSelected,
        isLoading: action.isLoading
      }

    case actionTypes.LOADING_ICONS:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case actionTypes.ADDING_ICONS:
      return {
        ...state,
        iconsAdded: state.iconsAdded.concat(action.icons)
          .filter((icon, index, self) => index === self.findIndex((t) => (
          t.id === icon.id && t.face === icon.face
        ))),
        total: Object.values(state.iconsAdded.map(icon => parseInt(icon.price))).reduce((a, b) => a + b, 0)
      }

    case actionTypes.REMOVE_ICON:
      return {
        ...state,
        iconsAdded: state.iconsAdded.filter(icon => icon.id !== action.id)
      }

    case actionTypes.REMOVE_ALL_ICONS:
      return {
        ...state,
        iconsAdded: []
      }

    default:
      return state;
  }

}

export default reducer;