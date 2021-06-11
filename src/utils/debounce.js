/* eslint-disable prefer-rest-params */
export default function debounce(func, wait) {
  let timeout;
  return function delay() {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
