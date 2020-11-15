let fruit = ['apple', 'orange', 'grape'];
fruit.shift();
fruit.pop();

fruit.unshift('peach');
fruit.push('melon');

fruit[1] = 'grapefruit';

let boys = {
  john: {
    age: 20,
    hobby: 'fishing',
    say: function() {
      return 'hello';
    }
  },
  mike: {
    age: 21,
    hobby: 'singing',
    say: function() {
      return 'bye';
    }
  },
  yoda: {
    age: 200,
    hobby: 'growing',
    say: function() {
      return 'hoho';
    }
  }
}
