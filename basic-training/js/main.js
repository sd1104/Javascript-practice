let fruits = ['apple', 'orange', 'grape'];

fruits[1] = 'melon';
fruits.unshift('pineapple');
fruits.push('peach');
// fruits.shift();
// fruits.pop();


let boys = {
  john: {
    age: 20,
    hobby: 'fishing',
    say: function() {
      console.log('hello');
    }
  },
  mike: {
    age: 21,
    hobby: 'singing',
    say: function() {
      console.log('bye');
    }
  }
}

// let num = 0;
// for(i=0; i<10; i++) {
//   num = (i+1) + (i+2);
// }
// let count = 0;
// while(count<10) {
//   num = (count+1) + (count+2);
//   count++;
// }
// console.log(num);

// for(i=0; i<fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for(let key1 in boys) {
//    let obj = boys[key1];
//   for(let key2 in obj) {
//     console.log(key2, obj[key2]);
//   }
// }

// fruits.forEach( function(value, index, array) {
//   console.log(index, value);
// })

if(fruits[0] === 'pineapple') {
  console.log('pineapple');
} else if(fruits[0] === 'apple') {
  console.log('apple');
} else {
  console.log('others');
}

let judge = fruits[0] === 'apple'? 'apple': 'others';
console.log(judge);

let fn1 = function(){
  console.log('fn1');
}

let fn2 = function(ref) {
  ref();
}

fn2(fn1);

setTimeout(fn1, 3000);

let fn3 = ref => console.log(ref);

fn3('fn3');

let fn4 = () => console.log('fn4');

fn4();