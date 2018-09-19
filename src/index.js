module.exports = function check(str, bracketsConfig) {
  // your solution
  let chars = str.split(''),
        stack = [],
        open = [],
        close = [],
        closeIndex,
        openIndex;

  for (let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
    
  for (let i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {           
      stack.push(openIndex);
      continue;
    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {          
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }

    
  if (stack.length !== 0) {
    return false;
  }

  return true;
}
