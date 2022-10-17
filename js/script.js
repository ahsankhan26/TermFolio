let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

let commandList = ['bio', 'clear', 'echo', 'github', 'name', 'projects', 'resume', 'socials'];

const functionCalls = () => {
    checkWindowClick();
    checkPressedEnter();
}


const checkWindowClick = () => {
    terminalBody.addEventListener('click', () => input.focus());
}

const checkPressedEnter = () => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            execute(input.value);
        }
    });
}

const execute = (inputValue) => {
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

const executeCommand = (command) => {

    terminalBody.innerHTML += '<br />'

    for(let i=0; i<data[command].length; ++i){

        terminalBody.innerHTML += `${data[command][i].name}: ` ;

        if(data[command][i].value.includes('http')){
            terminalBody.innerHTML += `<a href="${data[command][i].value}" target="_blank">${data[command][i].value}</a>` ;
        } else{
            terminalBody.innerHTML += `${data[command][i].value}` ;
        }
    }
}

const checkCommand = (inputCommand) => {

    terminalBody.innerHTML += '<br>';
    let command = inputCommand.split(" ")[0];

    if(command){
        if(command === 'clear'){ commandClear();}
        else if(command === 'echo') {commandEcho(inputCommand);}
        else if(command === 'github'){ commandGithub(command)}
        else if(command === 'help'){ commandHelp();}
        else if(command === 'resume'){ commandResume();}
        else if(commandList.includes(command)){ executeCommand(command);}
        else{
            terminalBody.innerHTML +=  inputCommand + ' is not recognized as a command, Try \"help\"';
        }
    }
    terminalBody.innerHTML += '<br>';
}

function addInput() {
    terminalBody.innerHTML += ' > <input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}

const commandClear = () => { terminalBody.innerHTML = '' }

function commandHelp() {
    terminalBody.innerHTML += `<br />${commandList.join('<br />')}`;
}

function commandGithub() {
    terminalBody.innerHTML += `<i class="fa fa-github"> <a href="https://github.com/${data.github[0].value}" target="_blank">${data.github[0].value}</a>`;
}

function commandResume() {
    terminalBody.innerHTML += `<a href=assets/${data.resume}>Resume</a>`;
}

function commandEcho(inputCommand) {
    for(let i=1; i<inputCommand.split(' ').length; i++){
        terminalBody.innerHTML += inputCommand.split(' ')[i] + ' ';
    }
    terminalBody.innerHTML += '<br>';
}

functionCalls();