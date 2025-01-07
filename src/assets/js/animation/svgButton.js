import { mv, buttonPath, } from "../settings/config-svg";
import { HexButtonColor } from "../settings/config-hex";
let activeSvg = document.querySelector(// アクティブ状態のsvgボタン
".animation__button-path.--active");
let activeHex = document.querySelector(// アクティブ状態のhexボタン
".animation__hexagon-button.--active");
// スライドアニメーション関数
function slideAnimation(activeHex, animationHex, color) {
    const slideBox = document.querySelector(".animation__slide-box");
    activeHex.classList.remove("--active");
    activeHex.classList.add("--middle");
    slideBox.style.backgroundColor = color;
    slideBox.animate([
        { transform: "scale(1.3) rotate(30deg) translateY(-90%)" },
        { transform: "scale(1.3) rotate(30deg) translateY(0%)" },
    ], {
        duration: 500,
        fill: "forwards",
    });
    setTimeout(() => {
        activeHex.classList.remove("--middle");
        animationHex.classList.add("--active");
        animationHex.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 500,
        });
    }, 500);
}
// 背景画像を変えるアニメーション関数
function changeImage(beforeClassName, afterClassName) {
    console.log(beforeClassName);
    console.log(afterClassName);
    mv === null || mv === void 0 ? void 0 : mv.classList.remove(`--${beforeClassName}`);
    mv === null || mv === void 0 ? void 0 : mv.classList.add(`--${afterClassName}`);
}
// SVGボタンのアニメーション関数
// SVGボタンクリック時のアニメーション実行関数
export function buttonClickAnimation() {
    buttonPath.forEach((button, index) => {
        button.addEventListener("click", () => {
            const clickedSvg = button; // クリックされたsvgボタン
            const beforeId = activeSvg === null || activeSvg === void 0 ? void 0 : activeSvg.dataset.target; // アクティブ状態のsvgボタンのdata-target
            const afterId = clickedSvg.dataset.target; // クリックされたsvgボタンのdata-target
            const animationHex = document.querySelector(`#${afterId}`); // 次にアクティブ状態にするhexボタン
            slideAnimation(activeHex, animationHex, HexButtonColor[index]); // スライドアニメーション実行
            changeImage(beforeId, afterId); // 背景画像を変えるアニメーション関数実行
            // アクティブ状態のsvgボタンとhexボタンを上書き
            activeSvg = button;
            activeHex = animationHex;
        });
    });
}
