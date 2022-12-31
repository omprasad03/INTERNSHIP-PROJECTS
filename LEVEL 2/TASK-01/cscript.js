let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error)
    {
        alert('Invalid Input Value')
    }
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function Clear(){
    outputScreen.value = " ";
}