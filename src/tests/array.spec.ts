import { isUnique } from '@helpers/array.helpers';

describe('Test array helpers', () => {
  it('Test isUnique with unique array', () => {
    const input: string[] = ['Bhainsa', 'Hyderabad', 'Chennai', 'Bangalore'];
    expect(isUnique(input)).toBe(true);
  });
  it('Test isUnique with non-unique array', () => {
    const input: string[] = ['Hyderabad', 'Hyderabad'];
    expect(isUnique(input)).toBe(false);
  });
});
