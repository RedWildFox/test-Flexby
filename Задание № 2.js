let input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];
let func = (array) => {
  let a = [], b = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i]%2 === 0){
      a.push(array[i]);
    }else{
      b.push(array[i]);
    }
  }  
  a.sort(function(a, b) {
    return b - a;
  });  
  b.sort(function(a, b) {
    return a - b;
  });
  return a.concat(b);
};
console.log(func(input));