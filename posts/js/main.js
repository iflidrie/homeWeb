var ll = {
  //跳转到id
  scrollTo(id) {
    let target = document.getElementById(id);
    if (!target) return;
    let targetPosition = target.offsetTop - 20;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, 600);
      window.scrollTo(0, run);
      if (timeElapsed < 600) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
}