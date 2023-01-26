// eslint-disable-next-line simple-import-sort/imports
import 'source-map-support/register';

import { isUnique } from '@helpers/array.helpers';

(() => {
  const cities: string[] = ['Bhainsa', 'Hyderabad', 'Chennai', 'Bangalore'];
  const isUniqueArray = isUnique(cities);
  console.log({ isUniqueArray });
})();
