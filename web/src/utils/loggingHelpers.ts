import {isDev} from './dev';

export const devError = (...args: Parameters<typeof console.error>) => {
  isDev && console.error(...args);
};

export const devLog = (...args: Parameters<typeof console.log>) => {
  isDev && console.log(...args);
};
