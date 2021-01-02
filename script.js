let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

terminalBody.addEventListener ('click', function(event){
    console.log("clicked!");
    input.focus();
})