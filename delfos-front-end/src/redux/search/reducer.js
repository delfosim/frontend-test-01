import actionsTypesSearch from "./actionsTypes";

const initialState = {
  search: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypesSearch.SET_SEARCH:
      return { ...state, search: action.payload };
    case actionsTypesSearch.CLEAR_SEARCH:
      return {
        ...state,
        search: "",
      };
    default:
      return state;
  }
}
