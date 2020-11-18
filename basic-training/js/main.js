let fruits = ['apple', 'orange', 'grape'];

fruits[1] = 'melon';
fruits.unshift('pineapple');
fruits.push('peach');
fruits.shift();
fruits.pop();


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