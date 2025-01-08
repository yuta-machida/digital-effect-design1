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
function expandHexButton(id: string, reverse: boolean): void {
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
  reverse ? expandAnimation?.reverse : expandAnimation?.play;

  // 六角形ボタン内のテキストを透過させる関数
  function textFadeout(): void {
    HexText.forEach((text) => {
      const textAnimation = text.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
      });
      reverse ? textAnimation.reverse : textAnimation.play;
    });
  }
  textFadeout();
}

// ボタン以外の六角形を動かすアニメーション関数
function moveHexagons(reverse: boolean): void {
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
    const animation = hexagon.animate(keyframes, options);

    reverse ? animation.reverse : animation.play;
  });
}

// モーダルを開くアニメーション関数
function openModal(id: string, reverse: boolean) {
  const modalId = `modal-${id}`;
  const modal: HTMLElement = document.querySelector(`#${modalId}`)!;
  const openModalAnimation = modal.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    fill: "forwards",
  });

  if (reverse) {
    openModalAnimation.reverse;
    setTimeout(() => {
      modal.style.display = "none";
    });
  } else {
    modal.style.display = "block";
    setTimeout(() => {
      openModalAnimation.play;
    }, 1000);
  }
}

// Hexボタンクリック時のアニメーション実行関数
export function hexClickAnimation(): void {
  HexButtons.forEach((hexButton) => {
    hexButton.addEventListener("click", () => {
      const id: string = hexButton.id;
      const reverse: boolean = false;
      expandHexButton(id, reverse);
      moveHexagons(reverse);
      openModal(id, reverse);
    });
  });
}

// モーダル内閉じるボタンクリック時のアニメーション実行関数
export function exitButtonClickAnimation(): void {
  const exitButtons = document.querySelectorAll<HTMLElement>(
    ".modal__exit-button"
  );
  console.log(exitButtons);
  exitButtons.forEach((exitButton) => {
    exitButton.addEventListener("click", () => {
      console.log(exitButton);
      const id: string = exitButton.dataset.exitTarget || "";
      const reverse: boolean = true;
      expandHexButton(id, reverse);
      moveHexagons(reverse);
      openModal(id, reverse);
    });
  });
}
