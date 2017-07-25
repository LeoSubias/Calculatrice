
$("#buttonForm").click(function(){
  var input1 = $("#input1").val();
  var input2 = $("#input2").val();
  var operator = $("#selectOperation").val();

var result;

if (operator === "+") {
  result = add(input1, input2);
  $("#result").text(result);
}

if (operator === "-") {
  result = substract(input1, input2);
  $("#result").text(result);
}

if (operator === "*") {
  result = multiply(input1, input2);
  $("#result").text(result);
}

if (operator === "/") {
  result = divide(input1, input2);
  $("#result").text(result);
}

  function add (a, b){
    return parseInt(a) + parseInt(b);
  }
  function substract(a, b) {
    return parseInt(a) - parseInt(b);
  }
  function multiply(a, b){
    return parseInt(a) * parseInt(b);
  }
  function divide(a, b) {
    return parseInt(a) / parseInt(b);
  }

});
