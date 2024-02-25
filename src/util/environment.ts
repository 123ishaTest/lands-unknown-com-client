export const isInProduction = (): boolean => {
  return process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test';
};
