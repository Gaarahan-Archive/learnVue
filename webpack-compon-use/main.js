import './src/index.css'
console.log('this is main.js of index.html');
class Han{
  constructor(name){
    this.name = name;
  }
  toString(){
    console.log(`name is ${this.name}`);
  }
}
let a = new Han('gaara');
a.toString();
