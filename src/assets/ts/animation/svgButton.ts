import { svgButtons, animationPath, buttonPath } from "../settings/config-svg";
import { HexButtonColor } from "../settings/config-hex";

let activeHex = document.querySelector<HTMLElement>(
  ".animation__hexagon-button.--active"
)!;
let activeSvg = document.querySelector<HTMLElement>(
  ".animation__button-path.--active"
);

// スライドアニメーション関数
function slideAnimation(
  activeHex: HTMLElement,
  animationHex: HTMLElement,
  color: string
): void {
  const slideBox: HTMLElement = document.querySelector(
    ".animation__slide-box"
  )!;
  slideBox.style.backgroundColor = color;
  slideBox.animate(
    [{ transform: "translateY(-90%)" }, { transform: "translateY(0%)" }],
    {
      duration: 500,
    }
  );
}

buttonPath.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button === activeSvg) {
      return;
    }

    const clickedSvg: HTMLElement = button; // クリックされたsvgボタン
    const id: string = clickedSvg.dataset.target!;
    const animationHex: HTMLElement = document.querySelector(`#${id}`)!; // 対応するHexボタン

    slideAnimation(activeHex, animationHex, HexButtonColor[index]);
    activeSvg = button;
  });
});
