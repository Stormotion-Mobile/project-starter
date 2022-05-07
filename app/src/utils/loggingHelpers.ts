export const devError = (...args: Parameters<typeof console.error>) => {
  __DEV__ && console.error(...args);
};

export const devLog = (...args: Parameters<typeof console.log>) => {
  __DEV__ && console.log(...args);
};
