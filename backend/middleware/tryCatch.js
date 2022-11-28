module.exports = (tryCatch) => (req, res, next) => {
  Promise.resolve(tryCatch(req, res, next)).catch(next);
};
