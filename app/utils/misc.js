var generateResults;

generateResults = function(query) {
  var results = [],
      len, i;

  if (query) {
    for (i = 0, len = query.length; i < len; i++) {
      results.push({
        id: i + 1,
        num: i + 1,
        character: query[i],
        code: query.charCodeAt(i)
      });
    }
  }

  return results;
};

export { generateResults };
