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
      console.log('hello');
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

// let num = 0;

// for($i=0; $i<10; $i++) {
//   num = ($i+1) + ($i+2);
// }
let count = 0;
// while(count<10) {
//   num = (count+1) + (count+2);
//   count++;
// }

// fruit.forEach(function(value, index, array) {
//   console.log(value, index, array);
// })

// for($i=0; $i<fruit.length; $i++) {
//   console.log(fruit[$i]);
// }

// for(key1 in boys) {
//   for(key2 in boys[key1]) {
//     console.log(key1+"'s age is ", boys[key1]['age']);
//   }
// }

if(fruit[0] === 'pineapple') {
  console.log(true);
} else {
  console.log(false);
}

let judge = fruit[0] === 'pineapple'? 'Yes, it is.' : "No, it isn't.";
console.log(judge);
