export const getTextColor = (background: string) => {
  const rgb = hexToRgb(background);
  const luminance = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) / 255;
  return luminance > 0.5 ? "black" : "white";
};

// Utility function to convert a hexadecimal color to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
  if (!result) {
    return { r: 255, g: 255, b: 255 };
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};
