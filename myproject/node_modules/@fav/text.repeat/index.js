'use strict';

function repeat(source, ntimes) {
  if (source === '') {
    return '';
  }
  if (ntimes < 1) {
    return '';
  }

  var len = source.length * ntimes;

  while (source.length < len) {
    source += source;
  }

  return source.slice(0, len);
}

module.exports = repeat;
