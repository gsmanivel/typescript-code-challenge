
// Type check
function typecast() {
  let age = 10;
  let name = 'mani';
  let flag = true;
  let height = 5.8
  console.log(typeof age);
  console.log(typeof name);
  console.log(typeof flag);
  console.log(typeof height);
  console.log(typeof age);
}


// Union
function unionDemo(input1: number | string , input2: number | string){
    if(typeof input1 === 'number' && typeof input2 === 'number')
        return input1+input2;
    else
        return input1.toString().concat(input2.toString())
}


// Literals
function literalsDemo(input: 'test'|'prod'){
    if( input === 'test')
        console.log("test env")
    else
        console.log("prod env")
}

typecast();
console.log(unionDemo(10,10));
console.log(unionDemo('mani', 'vel'));
literalsDemo('test');
literalsDemo('prod');
