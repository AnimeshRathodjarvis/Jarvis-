
const input = document.querySelector("input");
const button = document.querySelector("button");
const status = document.querySelector("h2");

function sendCommand() {
    const command = input.value.trim();

    if (command === "") {
        status.textContent = "PLEASE ENTER A COMMAND";
        return;
    }

    status.textContent = "COMMAND RECEIVED: " + command;
    input.value = "";
}

button.addEventListener("click", sendCommand);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendCommand();
    }
});
