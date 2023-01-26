export const isUnique = <T>(input: T[] = []): boolean => {
  return input.length === new Set(input).size;
};
