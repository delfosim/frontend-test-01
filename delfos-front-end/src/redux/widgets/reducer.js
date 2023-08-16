import uuid from "react-uuid";
import actionsTypesWidgets from "./actionsTypes";
import { filterWidgets } from "./actions";

const initialState = {
  widgets: [
    {
      id: uuid(),
      type: "line",
      text: "Valores Mensais",
      categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      textY: "Valores",
      series: [
        {
          name: "Impostos",
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "Comércio",
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "Pessoal",
          data: [10, 50, 30, 60, 50, 70],
        },
        {
          name: "Empresa",
          data: [10, 20, 320, 550, 50, 60],
        },
      ],
    },
  ],
  filteredWidgets: [],
};

export default function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypesWidgets.ADD_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      };
    case actionsTypesWidgets.REMOVE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(
          (widget) => widget.id !== action.payload.id
        ),
      };
    case actionsTypesWidgets.FILTER_WIDGETS:
      const copyWidgets = state.widgets.slice();

      const filteredWidgets = copyWidgets.filter((widget) =>
        widget.text.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        filteredWidgets: filteredWidgets,
      };
    case actionsTypesWidgets.UPDATE_WIDGET:
      const indexWidgetSelected = state.widgets.findIndex(
        (widget) => widget.id === action.payload.id
      );

      const updatedWidgets = [...state.widgets];
      updatedWidgets[indexWidgetSelected] = action.payload;

      return {
        ...state,
        widgets: updatedWidgets,
      };
    default:
      return state;
  }
}
