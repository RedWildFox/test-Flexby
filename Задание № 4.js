function drawRating(vote){
  let check = (max,value) => {
    return value <=max 
  };
  switch(true) {
    case check(20,vote):
      return '1 звезда';
    case check(40,vote):
      return '2 звезда';
    case check(60,vote):
      return '3 звезда';
    case check(80,vote):
      return '4 звезда';
    case check(100,vote):
      return '5 звезда';
  }
}

console.log(drawRating(0));
console.log(drawRating(1));
console.log(drawRating(50));
console.log(drawRating(99));
