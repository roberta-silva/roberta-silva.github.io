// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

//slide projetos
import SlideNav from "./modules/slide.js";
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");

//scroll suave
import ScrollSuave from "./modules/scroll-suave.js";
const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();
