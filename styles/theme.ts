import { numberToRem } from "~/utils/rem";

const _defaultTheme = {
  wrap: "1440px",
  rap: "1200px",

  color: {
    mainBackground: "#f2f3f7",
    grayColor: "#7a7c85",
    blackGrayColor: "#f0f0f0b3",
    headerBlackBackground: "#1a1b1e",
  },

  size: {
    leftMenu: numberToRem(260, 1),
    rightMenu: numberToRem(1410, 1),
  }
};

export const defaultTheme = _defaultTheme;
