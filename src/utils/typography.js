import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Palatino", "serif"],
  bodyFontFamily: ["Alegreya", "serif"],
  scaleRatio: 2,
  googleFonts: [{ name: "Alegreya", styles: ["400"] }]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
