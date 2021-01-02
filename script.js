let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");


let string = {
    name: "Ahsan Khan"
}

functionCalls();

function functionCalls() {
    checkWindowClick();
    checkPressedEnter();
}

function checkWindowClick() {
    terminalBody.addEventListener ('click', function(event){
        // console.log("clicked!");
        input.focus();
    });
}

function checkPressedEnter() {
    input.addEventListener('keydown', function(e){
        // console.log("function");
        if (e.key === 'Enter') {
            // console.log("Enter");
            execute(input.value);
        }
    });
}

function execute(inputValue) {

    input.remove();
    terminalBody.innerHTML += "<br>Hello";
    addInput();
}

function addInput() {
    terminalBody.innerHTML += '<input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}
