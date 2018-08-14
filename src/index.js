import {
  isFirstName,
  isFirstAndLastName
} from './check';
import { pretty } from './format';

const extract = (name, options = { pretty: true }) => {
  const segments = name.split(' ');
  let filtered = [segments[0]];
  if (isFirstName(segments[1]) && !isFirstAndLastName(segments[1])) {
    filtered.push(segments[1]);
  }
  return options.pretty ? pretty(filtered) : filtered.join(' ');
};

export default extract;
