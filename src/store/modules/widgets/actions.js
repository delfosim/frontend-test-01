export function addNewWidget(widget) {
  return {
    type: '@widgets/NEW',
    widget,
  };
}

export function deleteWidget(id) {
  return {
    type: '@widgets/DELETE',
    id,
  };
}
