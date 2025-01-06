import { HexButtons, Hexagons, HexagonsColor, HexButtonColor, } from "../settings/config-hex";
// 六角形の背景色を追加する関数
export function addHexagonsColor() {
    Hexagons.forEach((hexagon, index) => {
        hexagon.style.backgroundColor = HexagonsColor[index];
    });
    HexButtons.forEach((button, index) => {
        button.style.backgroundColor = HexButtonColor[index];
    });
}
// モーダルを開く関数
export function openModal() { }
