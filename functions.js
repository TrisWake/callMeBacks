const identity = function (value) {
return value
};

const first = function (array, n) {
  if(n === undefined){
    return array[0]
  }  if (n === 0) {
    return [];
  } if (n > array.length) {
    return array;
} return array.slice(0, n);
};
  
const last = function (array, n) {
  if(n === undefined){
    return array[array.length -1]
  }
  if(n === 0){
    return []
  }
  if(n > array.length){
    return array
  }
  return array.slice(array.length - n)
};

const each = function () {
  
};

const indexOf = function () {
  
};

const map = function () {

}

const filter = ()=>{

}

const reject = ()=>{
}

const uniq = () =>{
}

const reduce = () =>{
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};