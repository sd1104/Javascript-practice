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

num = 0
// for(i=0; i<10; i++) {
//   num = (i+1) + (i+2);
// }
i = 0
while(i<10) {
    num = (i+1) + (i+2);
    i++;
}
console.log(num)