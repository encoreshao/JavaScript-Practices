// Key: 1. state, 2. delay time
function throttle(callback, delayTime) {
  let state = true; // Set state is opened

  return function() {
    if (!state) {
      return;
    }

    state = false;
    setTimeout(() => {
      callback && callback();
      state = true;
    }, delayTime);
  }
}
