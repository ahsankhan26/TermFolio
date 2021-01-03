let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

let commands = new Map();
commands.set('name', '<br>' + data.name + '<br>');
commands.set('github', `<br><a href="https://github.com/${data.github}" target="_blank">${data.github}</a><br>`);
commands.set('help', '<br><br>name<br>clear<br>github<br>');


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
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

function checkCommand(inputCommand){

    if(commands.has(inputCommand)){
        console.log(commands.get(inputCommand));
        terminalBody.innerHTML += commands.get(inputCommand);
    }
    else if (inputCommand === 'clear'){
        terminalBody.innerHTML = '';
    }
    else if (inputCommand === ""){
        terminalBody.innerHTML += '<br>';
    }
    else {
        terminalBody.innerHTML += '<br>' + inputCommand + ' is not recognized as a command, Try \"help\"<br>';
    }
}

function addInput() {
    terminalBody.innerHTML += ' > <input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}
