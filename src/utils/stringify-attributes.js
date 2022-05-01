const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const stringifyFit = (fits) => {
  let str = "";
  for (const fit in fits) {
    if (fits[fit] === true) {
      if (fit === "tightAndStretchy") str += "Tight and Stretchy, ";
      else if (fit === "slimTailored") str += "Slim Tailored, ";
      else if (fit === "looselyOversized") str += "Loosely Oversized, ";
    }
  }
  return str.slice(0, -2);
};

export const stringifySizes = (sizes) => {
  let str = "";
  for (const size in sizes) {
    if (sizes[size] === true) {
      if (size === "twoX") str += `xx, `;
      else if (size === "threeX") str += `xxx, `;
      else str += `${size.toUpperCase()}, `;
    }
  }
  return str.slice(0, -2);
};

export const stringifyColors = (colors) => {
  let str = "";
  for (const color in colors) {
    if (colors[color] === true) {
      str += `${capitalize(color)}, `;
    }
  }
  return str.slice(0, -2);
};
