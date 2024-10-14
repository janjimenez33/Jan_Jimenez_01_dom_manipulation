// EXERCISE 1
console.log(document.getElementById('mainTitle'));

// EXERCISE 2
document.getElementById('content').innerHTML = '<p>Updated Content</p>';

// EXERCISE 3
document.getElementById('content').style.backgroundColor = 'lightgreen';

// EXERCISE 4
document.getElementById('list').classList.add('active');

setTimeout(() => {
  document.getElementById('list').classList.remove('active');
}, 2000);

// EXERCISE 5
let newButton = document.createElement('button');

newButton.textContent = 'Click Me';
document.getElementById('content').appendChild(newButton);

// EXERCISE 6
let resultElement = document.getElementById('result');

if (resultElement) {
  resultElement.remove();
}

// EXERCISE 7
let actionButton = document.getElementById('actionButton');

if (actionButton) {
    actionButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

// EXERCISE 8
let inputField = document.querySelector('input');
let newResultDiv = document.createElement('div');

document.body.appendChild(newResultDiv);

inputField.addEventListener('input', () => {
  newResultDiv.textContent = inputField.value;
});

// EXERCISE 9
let actionButton = document.getElementById('actionButton');

if (actionButton) {
  actionButton.addEventListener('click', () => {
    let contentDiv = document.getElementById('content');
    contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
  });
} else {
  console.error('Action button not found');
}


// EXERCISE 10
if (inputField) {
  inputField.placeholder = 'Enter your name';
} else {
  console.error('Input field not found');
}
}

