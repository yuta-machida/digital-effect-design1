import { svgButtonPath, svgAnimationPath, arcPath } from "./config-svg.js";


/**
 *  svgボタンを回転させる関数
 */
let currentAngle = 0;
function rotateAnimation(animationPaths, arcPaths) {
    const centerX = 500;
    const centerY = 500;
    const radian = Math.PI / 180;
    const speed = 7

    animationPaths.forEach((path, index) => {
        const arc = arcPaths[index];

        const x1 = centerX + arc.radius * Math.cos((arc.startAngle + currentAngle) * radian);
        const y1 = centerY + arc.radius * Math.sin((arc.startAngle + currentAngle) * radian);
        const x2 = centerX + arc.radius * Math.cos((arc.lastAngle + currentAngle) * radian);
        const y2 = centerY + arc.radius * Math.sin((arc.lastAngle + currentAngle) * radian);

        const d = `M ${x1},${y1} A ${arc.radius},${arc.radius} 0 0,1 ${x2},${y2}`;
        path.setAttribute("d", d);
    });

    if (currentAngle <= -360){
        currentAngle = 0;
        return;  
    } 
    currentAngle -= speed;
    
    requestAnimationFrame(() => rotateAnimation(animationPaths, arcPaths));
}

/**
 *  svgボタンを透過させる関数
 */
function fadeSvgButton(svgButton){
    const keyframes = [
        { opacity: 0, offset: 0},        
        { opacity: 0, offset: 0.8},
        { opacity: 1, offset: 1},
    ];
    const option = {
        duration: 1000
    }
    svgButton.forEach((svg) => {
        svg.animate(keyframes,option);
    })
}

/**
 *  アニメーションの実行
 */
document.addEventListener("DOMContentLoaded",() => {
    svgButtonPath.forEach((svgButton) => {
        svgButton.addEventListener("click",() => {
            rotateAnimation(svgAnimationPath,arcPath);
            fadeSvgButton(svgButtonPath);
        });
    });
});