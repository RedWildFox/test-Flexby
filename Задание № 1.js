class BaseClass{
  set a(value){
    this.a_value=value;
  }
  
  get a(){
    return -this.a_value;
  }
  
  set b(value){
    this.b_value=value;
  }
  
  get b(){
    return -this.b_value;
  }
}

class MyClass extends BaseClass {
  result(a,b) {
    this.a = a;
    this.b = b;
    return 100 - this.a + this.b;
  }
}

const m = new MyClass;
console.log(m.result(50, 40) === 110);
console.log(m.result(10, 90) === 20);