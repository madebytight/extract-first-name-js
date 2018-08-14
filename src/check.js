import names from './data/names';
import combinations from './data/combinations';

const isFirstName = (name) => {
  if (typeof name !== 'string') {
    return false;
  }
  return names.indexOf(name.toLowerCase()) !== -1;
};

const isFirstAndLastName = (name) => {
  if (typeof name !== 'string') {
    return false;
  }
  return combinations.indexOf(name.toLowerCase()) !== -1;
};

export {
  isFirstName,
  isFirstAndLastName
};
