

const display = document.getElementById("display");

function toDisplay(input){
        display.value += input;
}

function toClear(){
         display.value = "";
}

function toCalculate(){
    try{
         display.value = eval(display.value);
    }catch(error){
           display.value="Error" ;
    }
}