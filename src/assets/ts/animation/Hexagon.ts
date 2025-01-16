import {
  HexButtons,
  HexButtonWrapper,
  Hexagons,
  HexagonsWrapper,
  HexText,
  HexagonsColor,
  HexButtonColor,
  hexKeyframes,
} from "../settings/config-hex";

// 六角形の背景色を追加する関数
export function addHexagonsColor(): void {
  Hexagons.forEach((hexagon, index) => {
    (hexagon as HTMLElement).style.backgroundColor = HexagonsColor[index];
  });
  HexButtons.forEach((button, index) => {
    (button as HTMLElement).style.backgroundColor = HexButtonColor[index];
  });
}

// 六角形ボタンの拡大アニメーション
function expandHexButton(id: string): void {
  const hexagon = HexButtonWrapper;
  const keyframes: Keyframe[] = [
    { transform: "translate(0) scale(1)" },
    { transform: "translate(-50%,-50%) scale(10)" },
  ];
  const options: KeyframeAnimationOptions = {
    duration: 1000,
    easing: "cubic-bezier(.96,.19,.93,.29)",
    fill: "forwards",
  };
  const expandAnimation = hexagon?.animate(keyframes, options);
  expandAnimation?.play;

  // 六角形ボタン内のテキストを透過させる関数
  function textFadeout(): void {
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
function moveHexagons(): void {
  HexagonsWrapper.forEach((hexagon, index) => {
    const scale: number = 0.7;
    const x: string = hexKeyframes[index].xPosition;
    const y: string = hexKeyframes[index].yPosition;
    const keyframes: Keyframe[] = [
      { transform: "translate(0) scale(1)" },
      { transform: `translate(${x},${y}) scale(${scale})` },
    ];
    const options: KeyframeAnimationOptions = {
      duration: 700,
      easing: "ease-in",
      fill: "forwards",
    };
    hexagon.animate(keyframes, options);
  });
}

// モーダルを開くアニメーション関数
function openModal(id: string) {
  const modalId = `modal-${id}`;
  const modal: HTMLElement = document.querySelector(`#${modalId}`)!;
  const openModalAnimation = modal.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    delay: 1000,
    fill: "forwards",
  });
  modal.style.display = "block";
  openModalAnimation.play;
}

// Hexボタンクリック時のアニメーション実行関数
export function hexClickAnimation(): void {
  HexButtons.forEach((hexButton) => {
    hexButton.addEventListener("click", () => {
      const id: string = hexButton.id;
      document.body.classList.add("--modal-open");
      expandHexButton(id);
      moveHexagons();
      openModal(id);
    });
  });
}
