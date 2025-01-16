export const HexButtons = document.querySelectorAll(".animation__hexagon-button");
export const HexButtonWrapper = document.querySelector(".animation__hexagon-button-wrapper");
export const Hexagons = document.querySelectorAll(".animation__hexagon");
export const HexagonsWrapper = document.querySelectorAll(".animation__hexagon-wrapper:not(.--hide)");
export const HexText = document.querySelectorAll(".animation__hexagon-text");
export const HexagonsColor = [
    "#57968A",
    "#57968A",
    "#8BAC9E",
    "#B1CAC0",
    "",
    "#B1CAC0",
];
export const HexButtonColor = ["#BDE5E9", "#E1D7B3", "#B8EEA0"];
// 六角形ボタン以外のアニメーション終了位置を定義
export const hexKeyframes = [
    {
        xPosition: "150px",
        yPosition: "100px",
    },
    {
        xPosition: "-120px",
        yPosition: "120px",
    },
    {
        xPosition: "120px",
        yPosition: "120px",
    },
    {
        xPosition: "120px",
        yPosition: "120px",
    },
    {
        xPosition: "120px",
        yPosition: "120px",
    },
];
