import {
  mv,
  svgButtons,
  animationPath,
  buttonPath,
  cx,
  cy,
  pathAttribute,
} from "../settings/config-svg";
import { HexButtonColor } from "../settings/config-hex";

let activeSvg = document.querySelector<HTMLElement>( // アクティブ状態のsvgボタン
  ".animation__button-path.--active"
);
let activeHex = document.querySelector<HTMLElement>( // アクティブ状態のhexボタン
  ".animation__hexagon-button.--active"
)!;

// スライドアニメーション関数
function slideAnimation(
  activeHex: HTMLElement,
  animationHex: HTMLElement,
  color: string
): void {
  const slideBox: HTMLElement = document.querySelector(
    ".animation__slide-box"
  )!;
  activeHex.classList.remove("--active");
  activeHex.classList.add("--middle");

  slideBox.style.backgroundColor = color;
  slideBox.animate(
    [
      { transform: "scale(1.3) rotate(30deg) translateY(-90%)" },
      { transform: "scale(1.3) rotate(30deg) translateY(0%)" },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
  setTimeout(() => {
    activeHex.classList.remove("--middle");
    animationHex.classList.add("--active");
    animationHex.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
    });
  }, 500);
}

// 背景画像を変えるアニメーション関数
function changeImage(beforeClassName: string, afterClassName: string): void {
  mv?.classList.remove(`--${beforeClassName}`);
  mv?.classList.add(`--${afterClassName}`);
}

// SVGボタンのアニメーション関数
function rotateAnimation(): void {
  animationPath.forEach((path, index) => {
    const radian: number = Math.PI / 180;
    const r: number = pathAttribute[index].radius;
    const initialStartAngle: number = pathAttribute[index].startAngle;
    const initialEndAngle: number = pathAttribute[index].endAngle;
    let rotationAngle: number = 0;
    const rotationSpeed: number = 8;

    // アニメーション用パスのd属性を更新する関数
    function updatePath(): void {
      if (rotationAngle < -360) return;

      const currentStartAngle = initialStartAngle + rotationAngle;
      const currentEndAngle = initialEndAngle + rotationAngle;
      const x1: number = cx + r * Math.cos(currentStartAngle * radian); // svg描写開始位置のx座標
      const y1: number = cy + r * Math.sin(currentStartAngle * radian); // svg描写開始位置のy座標
      const x2: number = cx + r * Math.cos(currentEndAngle * radian); // svg描写終了位置のx座標
      const y2: number = cy + r * Math.sin(currentEndAngle * radian); // svg描写終了位置のy座標
      const d: string = `M ${x1},${y1} A ${r},${r} 0 0,1 ${x2},${y2}`;
      path.setAttribute("d", d);
      rotationAngle -= rotationSpeed;

      requestAnimationFrame(updatePath);
    }
    // ボタン用パスの表示・非表示切り替えアニメーション関数
    function fadeoutPath() {
      const delay: number = 600;
      buttonPath.forEach((button) => {
        button.style.transition = "opacity 0s";
        button.style.opacity = "0";
        setTimeout(() => {
          button.style.transition = "opacity .7s";
          button.style.opacity = "1";
        }, delay);
      });
    }

    updatePath();
    fadeoutPath();
  });
}

// SVGボタンクリック時のアニメーション実行関数
export function svgClickAnimation(): void {
  buttonPath.forEach((button, index) => {
    button.addEventListener("click", () => {
      const clickedSvg: HTMLElement = button; // クリックされたsvgボタン
      const beforeId: string = activeSvg?.dataset.target!; // アクティブ状態のsvgボタンのdata-target
      const afterId: string = clickedSvg.dataset.target!; // クリックされたsvgボタンのdata-target
      const animationHex: HTMLElement = document.querySelector(`#${afterId}`)!; // 次にアクティブ状態にするhexボタン

      slideAnimation(activeHex, animationHex, HexButtonColor[index]); // スライドアニメーション実行
      changeImage(beforeId, afterId); // 背景画像を変えるアニメーション関数実行
      rotateAnimation(); // SVGボタンの回転アニメーションを実行

      // アクティブ状態のsvgボタンとhexボタンを上書き
      activeSvg = button;
      activeHex = animationHex;
    });
  });
}
