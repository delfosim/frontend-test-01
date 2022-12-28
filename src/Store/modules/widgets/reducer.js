import { CREATE, DELETE, GET, UPDATE } from "./actionType";

const defaultState = [];

const widgetReducer = (state = defaultState, action) => {
  const { data } = action;
  
  switch (action.type) {
    case CREATE:
      return [...state, data];

    case GET:
      return [...data];

    case DELETE:
      return state.filter((item) => item.id !== action.data);

    case UPDATE:
      state[state.indexOf(state.find((item) => item.id === data.id))] = data;
      return [...state];

    default:
      return state;
  }
};

export default widgetReducer;
