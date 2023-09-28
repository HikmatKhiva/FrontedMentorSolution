export const fadeAnimate = (dir: string, delay = 0, duration = 0) => ({
  initial: {
    x: dir === "right" ? 50 : dir === "left" ? -50 : 0,
    y: dir === "top" ? 50 : dir === "bottom" ? 50 : 0,
    opacity: 0,
  },
  finish: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
      type: "spring",
    },
  },
});

export const scaleAnimate = (delay: number) => ({
  initial: {
    scale: 0.1,
  },
  finish: {
    scale: 1,
    transition: {
      duration: 1,
      delay,
      type: "spring",
    },
  },
});
export const svgVariants = {
  start: {
      pathLength: 0,
      opacity: 0,
  },
  end: {
      pathLength: 1,
      opacity: 1,
  },
};