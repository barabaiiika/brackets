module.exports = function check(str, bracketsConfig) {
  while (bracketsConfig.some(el => str.includes(el.join('')))) {
    for (const arr of bracketsConfig) {
      str = str.replace(arr.join(''),'');
    }
  }
  return !str;
}
