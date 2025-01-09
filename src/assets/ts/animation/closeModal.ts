import {
  HexButtonWrapper,
  HexagonsWrapper,
  HexText,
  hexKeyframes,
} from "../settings/config-hex";

// 六角形ボタンの縮小アニメーション
function reductionHexButton(id: string): void {
  const hexagon = HexButtonWrapper;
  const keyframes: Keyframe[] = [
    { transform: "translate(-50%,-50%) scale(10)" },
    { transform: "translate(0) scale(1)" },
  ];
  const options: KeyframeAnimationOptions = {
    duration: 1000,
    easing: "cubic-bezier(.19, .96, .29, .93)",
    fill: "forwards",
    delay: 300,
  };
  const expandAnimation = hexagon?.animate(keyframes, options);
  expandAnimation?.play;

  // 六角形ボタン内のテキストを表示させる関数
  function textFadeIn(): void {
    HexText.forEach((text) => {
      const textAnimation = text.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        delay: 1500,
      });
      textAnimation.play;
    });
  }
  textFadeIn();
}

// ボタン以外の六角形を動かすアニメーション関数
function returnHexagons(): void {
  HexagonsWrapper.forEach((hexagon, index) => {
    const scale: number = 0.7;
    const x: string = hexKeyframes[index].xPosition;
    const y: string = hexKeyframes[index].yPosition;
    const keyframes: Keyframe[] = [
      { transform: `translate(${x},${y}) scale(${scale})` },
      { transform: "translate(0) scale(1)" },
    ];
    const options: KeyframeAnimationOptions = {
      duration: 1000,
      easing: "ease-out",
      fill: "forwards",
      delay: 300,
    };
    hexagon.animate(keyframes, options);
  });
}

// モーダルを閉じるアニメーション関数
function closeModal(id: string) {
  const modalId = `modal-${id}`;
  const modal: HTMLElement = document.querySelector(`#${modalId}`)!;
  const openModalAnimation = modal.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500,
    fill: "forwards",
  });
  openModalAnimation.play;
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

// モーダル内閉じるボタンクリック時のアニメーション実行関数
export function exitButtonClickAnimation(): void {
  const exitButtons = document.querySelectorAll<HTMLElement>(
    ".modal__exit-button"
  );
  exitButtons.forEach((exitButton) => {
    exitButton.addEventListener("click", () => {
      const id: string = exitButton.dataset.exitTarget || "";
      reductionHexButton(id);
      returnHexagons();
      closeModal(id);
    });
  });
}
