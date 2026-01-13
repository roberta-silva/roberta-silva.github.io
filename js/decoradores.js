export default class Decoradores {
  constructor() {
    this.decoradores = document.querySelectorAll(".decorador img");
    this.estados = [];

    this.decoradores.forEach((el, i) => {
      this.estados[i] = {
        rotation: 0,
        isAutoRotating: false,
        autoRotateId: null,
        lastScrollTop: 0,
        scrollTimeout: null,
      };
    });
  }

  adicionarEvento() {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      this.decoradores.forEach((el, i) => {
        const estado = this.estados[i];

        if (estado.autoRotateId) {
          clearInterval(estado.autoRotateId);
          estado.isAutoRotating = false;
          estado.autoRotateId = null;
        }

        const delta = scrollTop - estado.lastScrollTop;

        estado.rotation += delta * 5;
        estado.rotation %= 360;

        el.style.transform = `rotate(${estado.rotation}deg)`;

        estado.lastScrollTop = scrollTop;

        clearTimeout(estado.scrollTimeout);
        estado.scrollTimeout = setTimeout(() => {
          this.startAutoRotate(i);
        }, 150);
      });
    });
  }

  startAutoRotate(i) {
    const estado = this.estados[i];
    if (estado.isAutoRotating) return;

    estado.isAutoRotating = true;
    let speed = 5;

    estado.autoRotateId = setInterval(() => {
      speed *= 0.95;
      estado.rotation += speed;
      estado.rotation %= 360;

      this.decoradores[i].style.transform = `rotate(${estado.rotation}deg)`;

      if (speed < 0.1) {
        clearInterval(estado.autoRotateId);
        estado.isAutoRotating = false;
        estado.autoRotateId = null;
      }
    }, 16);
  }

  init() {
    if (this.decoradores.length) {
      this.adicionarEvento();
    }
  }
}
