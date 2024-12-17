import { hexagons, hexButton, hexButtonColor } from "./config-hex.js";

document.addEventListener("DOMContentLoaded",()=>{
    // 六角形の背景色をつける関数
    function addHexagonColor(){
        const hexagonColor = [
            "#57968A",
            "#57968A",
            "#8BAC9E",
            "#B1CAC0",
            "",
            "#B1CAC0",
        ];
        hexagons.forEach((hexagon,index) => {
            hexagon.style.backgroundColor = hexagonColor[index];
        });
    }
    addHexagonColor();

    // 六角形のボタンの背景色をつける関数
    function addHexButtonColor(){
        hexButton.forEach((button,index) => {
            button.style.backgroundColor = hexButtonColor[index];
        });
    }
    addHexButtonColor();

})