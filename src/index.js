module.exports = function check(str, bracketsConfig) {
  // your solution

  if (str.length % 2){
    return false;
  }

  let   stack = [],
        open = [],
        close = [];

  for (let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
    
  for (let i = 0; i < str.length; i++) {
    let index = close.findIndex(s => s === str[i]);
    let openSymbol = open[index];

    let flag = true;
    if (close.includes(str[i])){
      if (stack[stack.length - 1] === openSymbol){
        stack.pop();
        flag = false;
      }
    }

    if (open.includes(str[i]) && flag){
      stack.push(str[i]);
    }

    //return !stack.length;
    /*
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
    */
  }

    
  if (stack.length !== 0) {
    return false;
  }

  return true;
}
