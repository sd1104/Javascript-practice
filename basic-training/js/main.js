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
