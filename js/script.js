// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

//decoradores
import Decoradores from "./decoradores.js";
const decoradores = new Decoradores();
decoradores.init();

import SlideNav from "./slide.js";
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
