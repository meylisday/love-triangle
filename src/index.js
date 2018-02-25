/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var firstElem;
  var secondElem;
  var thirdElem;
  var i = 0;
  while (i <  preferences.length) {
    i++
    if (preferences[i - 1] == 0 || preferences[i - 1] == i) continue;
       firstElem = preferences[i - 1];

    if (preferences[firstElem - 1] == 0 || preferences[firstElem - 1] == firstElem) continue;
      secondElem = preferences[firstElem - 1];

    if (preferences[secondElem - 1] == 0 || preferences[secondElem - 1] == secondElem) continue;
      thirdElem = preferences[secondElem - 1];

    if (thirdElem == i) {
      count++;
      preferences[i - 1] = 0;
      preferences[firstElem - 1] = 0;
      preferences[secondElem - 1] = 0;
    }
  }
  return count;
};