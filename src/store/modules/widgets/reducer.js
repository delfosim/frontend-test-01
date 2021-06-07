const initialState = JSON.parse(localStorage.getItem('widgets') || '[]');

export default function widgets(state = initialState, action) {
  switch (action.type) {
    case '@widgets/NEW':
      const newState = state.concat(action.widget);

      localStorage.setItem('widgets', JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}
