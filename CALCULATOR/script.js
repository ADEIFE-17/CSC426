const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let expression = display.value.replace(/\^/g, "**");
        display.value = eval(expression);
    }
    catch{
        display.value = "Error";
    }
}