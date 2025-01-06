import {
  HexButtons,
  HexButtonWrapper,
  Hexagons,
  HexText,
  HexagonsColor,
  HexButtonColor,
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

// モーダルを開く関数
export function openModal() {}
