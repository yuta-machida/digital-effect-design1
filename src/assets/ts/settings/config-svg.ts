export const mv = document.querySelector<HTMLElement>(".mv");
export const svgButtons = document.querySelectorAll(".animation__svg");

export const buttonPath = document.querySelectorAll<HTMLElement>(
  ".animation__button-path"
);
export const animationPath = document.querySelectorAll<HTMLElement>(
  ".animation__animation-path"
);

export const cx: number = 500;
export const cy: number = 500;
export const pathAttribute = [
  {
    radius: 400,
    startAngle: 160,
    endAngle: 230,
  },
  {
    radius: 430,
    startAngle: 150,
    endAngle: 220,
  },
  {
    radius: 460,
    startAngle: 170,
    endAngle: 240,
  },
];
