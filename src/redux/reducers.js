import { DELETE_WIDGET, SAVE_NEW_CHART, SET_FILTER_WIDGET } from "./actions";

const initialState = {
  charts: [],
  widgetFilter: "",
};

const insertNewChart = (state, action) => {
  let idx = state.charts.findIndex((chart) => chart.id === action.payload.id);

  /* Verifica se o grafico ja esta na lista de graficos*/

  if (idx === -1) {
    return { ...state, charts: [...state.charts, action.payload] };
  } else {
    state.charts[idx] = { ...action.payload };
    return { ...state, charts: [...state.charts] };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_CHART:
      return insertNewChart(state, action);
    case SET_FILTER_WIDGET:
      return {
        ...state,
        widgetFilter: action.payload,
      };
    case DELETE_WIDGET:
      return {
        ...state,
        charts: state.charts.filter((chart) => chart.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
