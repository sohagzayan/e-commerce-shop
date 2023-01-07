export const scrollBlock = (showMobileFiltering: boolean) => {
  if (showMobileFiltering) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};
