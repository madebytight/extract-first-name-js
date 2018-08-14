const pretty = (segments) => {
  let formattedSegments = [];
  segments.forEach((segment) => {
    const formatted = segment.split('-').map((s) => {
      return s[0].toUpperCase() + s.slice(1).toLowerCase()
    }).join('-');
    formattedSegments.push(formatted);
  });
  return formattedSegments.join(' ');
};

export {
  pretty
};
