import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('widgets') || '[]');

export default function widgets(state = initialState, action) {
  let newState;

  switch (action.type) {
    case '@widgets/NEW':
      newState = state.concat({
        ...action.widget,
        id: uuidv4(),
      });

      localStorage.setItem('widgets', JSON.stringify(newState));

      return newState;
    case '@widgets/DELETE':
      newState = state.filter((widget) => widget.id !== action.id);

      localStorage.setItem('widgets', JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}
