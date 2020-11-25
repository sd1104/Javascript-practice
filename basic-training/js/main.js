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

// for(i in fruits) {
//   console.log(fruits[i]);
// }

// for(i in boys) {
//   for(f in boys[i]) {
//     console.log(i, f, boys[i][f])
//   }
// }

// let numA = Math.floor( Math.random()*10) +1;
// let lucky = 10;
// if(numA === lucky) {
//   console.log('lucky')
// } else if(numA === 5) {
//   console.log(5)
// } else {
//   console.log('unlucky')
// }

// judge = numA === lucky? 'lucky' : 'unlucky';
// console.log(judge)


let fn = function() {
  console.log('hello')
}

setTimeout(fn, 3000)


let fn1 = () => console.log('hello');

fn1();