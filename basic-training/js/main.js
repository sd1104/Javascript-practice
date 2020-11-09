let fruits = [
  'apple',
  'orange',
  'grape'
];
fruits[1] = 'melon';
fruits[3] = 'peach';
fruits.unshift('pineapple');
fruits.push('watermelon');
// fruits.pop();
// fruits.shift();
// fruits.splice(0,3)
indexNum = fruits.indexOf('apple');
// console.log(fruits, indexNum);


let boys = {
  john: {
    age: 20,
    hobby: 'fishing',
    favorite: 'apple',
    say: function() {
      console.log('hello');
    }
  },
  Mike: {
    age: 30,
    hobby: 'walking',
    favorite: 'orange',
    say: function() {
      console.log('hello');
    }
  }
}
// console.log(boy);
// boy.john.say();


// let num = 0;
// function sum_up() {
//   for($i=0; $i <10; $i++) {
//     num++;
//     console.log((num)+'+'+(num+1)+'='+(num+num+1));
//   }
// }
// sum_up();
// $i = 0;
// function sum_up() {
//   while($i<10){
//     num += 1;
//     console.log((num)+'+'+(num+1)+'='+(num+num+1));
//     $i++;
//   }
// }
// sum_up();
// for($i=0; $i< fruits.length; $i++) {
//   console.log(fruits[$i]);
// }
// fruits.forEach(function(item, index, array){
//   console.log(index, ':', item);
// });

// for(let key1 in boys) {
//   for(let key2 in boys[key1]) {
//     console.log(key1+"'s"+' '+key2+'='+boys[key1][key2]);
//   }
// }
// let fruit = 'pineapple';
// if(fruits[0] == fruit) {
//   console.log("That's right.")
// } else {
//   console.log("It's not a pineapple.")
// };

// let judge = (fruit == 'apple')? 'OK':'No';
// console.log(judge);

// let hello = function() {
//   console.log('hello');
// };
// setTimeout(hello, 5000);



// function a(name) {
//   return 'hello' + " " + name;
// };
// const b = function(name) {
//   return 'hello' + " " + name;
// }
// const c = name => 'hello' + " " + name;
// const d = (name1, name2) => 'hello' + " " + name1 + ',' + name2;
// const e = () => 'hello';
// const f = _ => 'hello';

// console.log(a('Tom'));
// console.log(b('Bob'));
// console.log(c('Nick'));
// console.log(d('Mike', 'John'));
// console.log(e());
// console.log(f());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello' + ' ' + this.name);
  }
}

const bob = new Person('Bob', 20);
console.log(bob.name);
bob.hello();