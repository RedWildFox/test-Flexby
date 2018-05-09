const str = 'Flexbe. Frontedn. Test. 1234567890.';
const func = (str) => {
  return str.split('').map(function(num){
     if(num.charCodeAt()%3 === 0)
       return 0;
    else 
      return ''
  }).join('').length;
};
console.log(func(str));