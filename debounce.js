function debounce(callback, delayTime) {
  let timer = null;
  
  return function() {
    // Reset timer
    if (timer != null) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      callback && callback();
    }, delayTime);
  }
}
