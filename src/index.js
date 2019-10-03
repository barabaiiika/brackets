module.exports = function check(str, bracketsConfig) {

  if (str.length % 2) return false;
  let pipeCounter = 0;

  const bracketsHash = new Map();
  const stack = [];

  for (const subArray of bracketsConfig) {
    if (subArray[0] === subArray[1]) {
      bracketsHash.set(subArray[1],
        {
          isOpen: false,
          value: subArray[0],
          toString() {return this.value}
        });
    } else {
      bracketsHash.set(subArray[1], subArray[0]);
    }
  }

  for (const item of str) {
    if (!bracketsHash.has(item)) {
      stack.push(item);

    } else if (bracketsHash.get(item).isOpen === false) {
      stack.push(item);
      bracketsHash.get(item).isOpen = true;

    } else if (bracketsHash.get(item) == stack[stack.length - 1]) {
      stack.pop();
      if (bracketsHash.get(item).isOpen === true) { bracketsHash.get(item).isOpen = false };

    } else {
      return false;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
