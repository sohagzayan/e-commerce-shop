export const FilteringMenuAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: { type: "spring", stiffness: 100, duration: 1 },
  },
  show: {
    opacity: 1,
    y: -30,
    transition: { type: "spring", stiffness: 100, duration: 2 },
  },
};

export const FilteringSearchBar = {
  hidden: {
    opacity: 0,
    width: "0px",
    transition: { type: "linear", duration: 0.2 },
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: { type: "linear", duration: 0.2 },
  },
};

export const mobileFilterViewAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
    // transform: "translateY(200px)",
    transition: { type: "spring", stiffness: 100, duration: 1 },
  },
  show: {
    opacity: 1,
    // y: 30,
    // transform: "translateY(0px)",

    transition: { type: "spring", stiffness: 100, duration: 2 },
  },
};
