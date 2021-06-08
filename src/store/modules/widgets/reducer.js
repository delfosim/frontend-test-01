import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('widgets') || '[]');

export default function widgets(state = initialState, action) {
  switch (action.type) {
    case '@widgets/NEW':
      const newState = state.concat({
        ...action.widget,
        id: uuidv4(),
      });

      localStorage.setItem('widgets', JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}
