function useDebounce(cb, delay = 5000) {
  let timerId;
  return (...args) => {
      console.log("the args is",...args);
      clearTimeout(timerId);
      timerId = setTimeout(() => {
          cb(...args);
      }, delay);
  }
}

export default useDebounce;
