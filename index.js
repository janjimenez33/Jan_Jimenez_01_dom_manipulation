// EXERCISE 1
console.log(document.getElementById('mainTitle'));

//EXERCISE 2
document.getElementById('content').innerHTML = '<p>Updated Content</p>';

//EXERCISE 3
document.getElementById('content').style.backgroundColor = 'lightgreen';

//EXERCISE 4
document.getElementById('list').classList.add('active');

setTimeout(() => {
    document.getElementById('list').classList.remove('active');
}, 
2);

//EXERCISE 5
let button = document.createElement('button');

button.textContent = 'Click Me';

document.getElementById('content').appendChild(button);

//EXERCISE 6
let resultElement = document.getElementById('result');

if (resultElement) {
    resultElement.remove();
}

//EXERCISE 7
button.addEventListener('click', () => {
    alert('Button Clicked!');
});

//EXERCISE 8
let inputField = document.querySelector('input');
let newResultDiv = document.createElement('div');
document.body.appendChild(newResultDiv);

inputField.addEventListener('input', () => {
    newResultDiv.textContent = inputField.value;
});

//EXERCISE 9
let actionButton = document.getElementById('actionButton');
let contentDiv = document.getElementById('content');

actionButton.addEventListener('click', () => {
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});

//EXERCISE 10
let inputFieldName = document.getElementById('inputField');
if (inputFieldName) {
    inputField.placeholder = "Enter your name";
} else {
    console.error('Input field not found');
}