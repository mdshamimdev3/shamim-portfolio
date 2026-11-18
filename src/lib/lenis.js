// Shared handle so other components can pause or drive smooth scrolling.
let instance = null;
export const getLenis = () => instance;
export const setLenis = (lenis) => {
  instance = lenis;
};
