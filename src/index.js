import {
  isFirstName,
  isFirstAndLastName
} from './check';

const extract = (name) => {
  const segments = name.split(' ');
  if (segments.length === 1) {
    return segments[0];
  }

  let filtered = [segments[0]];
  if (isFirstName(segments[1]) && !isFirstAndLastName(segments[1])) {
    filtered.push(segments[1]);
  }
  return filtered.join(' ');
};

export default extract;
