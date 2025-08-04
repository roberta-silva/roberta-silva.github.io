// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

const decoradores = document.querySelectorAll(".decorador img");
if (decoradores.length > 0) {
  const estados = [];

  decoradores.forEach((el, i) => {
    estados[i] = {
      rotation: 0,
      isAutoRotating: false,
      autoRotateId: null,
      lastScrollTop: 0,
    };
  });

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    decoradores.forEach((el, i) => {
      const estado = estados[i];

      if (estado.autoRotateId) {
        clearInterval(estado.autoRotateId);
        estado.isAutoRotating = false;
        estado.autoRotateId = null;
      }

      let delta = scrollTop - estado.lastScrollTop;

      estado.rotation += delta * 5;
      estado.rotation %= 360;

      el.style.transform = `rotate(${estado.rotation}deg)`;

      estado.lastScrollTop = scrollTop;

      clearTimeout(estado.scrollTimeout);
      estado.scrollTimeout = setTimeout(() => {
        startAutoRotate(i);
      }, 150);
    });
  });

  function startAutoRotate(i) {
    const estado = estados[i];
    if (estado.isAutoRotating) return;
    estado.isAutoRotating = true;

    let speed = 5;

    estado.autoRotateId = setInterval(() => {
      speed *= 0.95;
      estado.rotation += speed;
      estado.rotation %= 360;
      decoradores[i].style.transform = `rotate(${estado.rotation}deg)`;

      if (speed < 0.1) {
        clearInterval(estado.autoRotateId);
        estado.isAutoRotating = false;
        estado.autoRotateId = null;
      }
    }, 16);
  }
}
