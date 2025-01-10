import { HexButtons, HexButtonWrapper, Hexagons, HexagonsWrapper, HexText, HexagonsColor, HexButtonColor, hexKeyframes, } from "../settings/config-hex";
// 六角形の背景色を追加する関数
export function addHexagonsColor() {
    Hexagons.forEach((hexagon, index) => {
        hexagon.style.backgroundColor = HexagonsColor[index];
    });
    HexButtons.forEach((button, index) => {
        button.style.backgroundColor = HexButtonColor[index];
    });
}
// 六角形ボタンの拡大アニメーション
function expandHexButton(id) {
    const hexagon = HexButtonWrapper;
    const keyframes = [
        { transform: "translate(0) scale(1)" },
        { transform: "translate(-50%,-50%) scale(10)" },
    ];
    const options = {
        duration: 1000,
        easing: "cubic-bezier(.96,.19,.93,.29)",
        fill: "forwards",
    };
    const expandAnimation = hexagon === null || hexagon === void 0 ? void 0 : hexagon.animate(keyframes, options);
    expandAnimation === null || expandAnimation === void 0 ? void 0 : expandAnimation.play;
    // 六角形ボタン内のテキストを透過させる関数
    function textFadeout() {
        HexText.forEach((text) => {
            const textAnimation = text.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
            });
            textAnimation.play;
        });
    }
    textFadeout();
}
// ボタン以外の六角形を動かすアニメーション関数
function moveHexagons() {
    HexagonsWrapper.forEach((hexagon, index) => {
        const scale = 0.7;
        const x = hexKeyframes[index].xPosition;
        const y = hexKeyframes[index].yPosition;
        const keyframes = [
            { transform: "translate(0) scale(1)" },
            { transform: `translate(${x},${y}) scale(${scale})` },
        ];
        const options = {
            duration: 700,
            easing: "ease-in",
            fill: "forwards",
        };
        hexagon.animate(keyframes, options);
    });
}
// モーダルを開くアニメーション関数
function openModal(id) {
    const modalId = `modal-${id}`;
    const modal = document.querySelector(`#${modalId}`);
    const openModalAnimation = modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        delay: 1000,
        fill: "forwards",
    });
    modal.style.display = "block";
    openModalAnimation.play;
}
// Hexボタンクリック時のアニメーション実行関数
export function hexClickAnimation() {
    HexButtons.forEach((hexButton) => {
        hexButton.addEventListener("click", () => {
            const id = hexButton.id;
            document.body.classList.add("--modal-open");
            expandHexButton(id);
            moveHexagons();
            openModal(id);
        });
    });
}
