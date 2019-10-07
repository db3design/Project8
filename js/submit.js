const button = document.getElementById('sendButton');
const name = document.getElementById('username').value;
const message = document.getElementById('messageField').value;

button.addEventListener("click", function () {
    if (name === "" || message === "") { 
        alert("Please Enter a Name and a Message"); 
    } else if (name === "") { 
        alert("Please Enter a Name "); 
    } else if (message === "") { 
        alert("Please type your message"); 
    } else { 
        alert("Your message has been sent!"); 
    }
});