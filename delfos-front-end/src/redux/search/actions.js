import actionsTypesSearch from "./actionsTypes";

export const addSearch = (searchValue) => {
  return {
    type: actionsTypesSearch.SET_SEARCH,
    payload: searchValue,
  };
};

export const clearSearch = () => {
  return {
    type: actionsTypesSearch.CLEAR_SEARCH,
  };
};
