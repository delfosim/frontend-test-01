export function addNewWidget(widget) {
  return {
    type: '@widgets/NEW',
    widget,
  };
}
