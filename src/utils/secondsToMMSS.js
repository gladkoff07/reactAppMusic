export default (seconds) => {
  return new Date(seconds * 60 * 1000).toISOString().substring(11, 16);
};
