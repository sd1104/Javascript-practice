window.name = 'John';

let person = {
  name: 'Bob',
  hello: function(){
    console.log(this.name);
  }
}

person.hello();

const helloBob = person.hello.bind(person);

function test(test) {
  test();
}

test(helloBob);