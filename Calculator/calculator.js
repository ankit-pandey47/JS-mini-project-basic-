 const userInput = document.getElementById("userinput");
 var expression = '';

 function press(num){
    //concatenation
    expression += num;
    userInput.value = expression;
 }
 function equal(){
    userInput.value = eval(expression);
    expression = userInput.value;
 }
 function erase(){
    expression = '';
    userInput.value = expression;
 }