let fruits = [
  'apple',
  'orange',
  'grape'
];
fruits.push('peach');
fruits.unshift('pine');
fruits.pop();
fruits.shift();

let boys = {
  john: {
    age: 20,
    hobby: 'fishing'
  },
  mike: {
    age: 21,
    hobby: 'singing'
  }
};

// num = 0
// for(i=0; i<10; i++) {
//   num = (i+1) + (i+2);
// }
// i = 0
// while(i<10) {
//     num = (i+1) + (i+2);
//     i++;
// }

// let plus = function() {
//   for(i=0; i<10; i++) {
//     let numA = Math.floor( Math.random()*10) +1
//     let numB = Math.floor( Math.random()*10) +1
//     console.log(`${numA} + ${numB}`)
//   }
// }

// fruits.forEach(function(value, index) {
//   console.log(index, value)
// })