import names from './data/names';
import combinations from './data/combinations';

const isFirstName = (name) => {
  return names.indexOf(name.toLowerCase()) !== -1;
};

const isFirstAndLastName = (name) => {
  return combinations.indexOf(name.toLowerCase()) !== -1;
};

export {
  isFirstName,
  isFirstAndLastName
};
