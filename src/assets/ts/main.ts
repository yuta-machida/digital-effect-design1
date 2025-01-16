import { addHexagonsColor, hexClickAnimation } from "./animation/Hexagon";
import { svgClickAnimation } from "./animation/svgButton";
import { exitButtonClickAnimation } from "./animation/closeModal";

document.addEventListener("DOMContentLoaded", () => {
  addHexagonsColor();
  svgClickAnimation();
  hexClickAnimation();
  exitButtonClickAnimation();
});
