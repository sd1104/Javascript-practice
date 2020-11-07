let heLLo = 'This is variable_num of heLLo.'

function hello() {
  console.log('This is called by hello_function');
}

function callback(callback_ob) {
  console.log('Comment under this low is called by callback_function.')
  callback_ob();
}

// callback(hello);


setTimeout(hello ,10000);