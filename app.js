const fibonacci = (number) => {
    let output = [];
    if (number === 1){
      output = [0];
    }
    else if (number <= 0){
      output = []
    }
    else if (number === 2){
      output = [0,1];
    }
    else {
      output = [0,1];
      for (i = 2; i < number; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
      }
      
    };
    return output;
  };
  console.log(fibonacci(5));
  module.exports = { fibonacci };