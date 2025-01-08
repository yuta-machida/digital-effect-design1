import { addHexagonsColor, hexClickAnimation } from "./animation/Hexagon";
import { svgClickAnimation } from "./animation/svgButton";
document.addEventListener("DOMContentLoaded", () => {
    addHexagonsColor();
    svgClickAnimation();
    hexClickAnimation();
});
