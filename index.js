// EXERCISE 1
const mainTitleElement = document.getElementById('mainTitle');

console.log(mainTitle);

// EXERCISE 2
const paragraphs = document.querySelectorAll('p');

paragraphs[1].textContent = "This paragraph has been changed.";

// EXERCISE 3
const firstListItem = document.querySelector('li');

firstListItem.style.color = 'red';
// EXERCISE 4
const firstParagraph = document.querySelector('p');

firstParagraph.classList.add('highlight');

// EXERCISE 5
const newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';

const existingList = document.querySelector('ul');
list.appendChild(newListItem);

// EXERCISE 6
const list = document.querySelector('ul');

list.removeChild(list.lastElementChild);

// EXERCISE 7
const button = document.getElementById('actionButton');

button.addEventListener('click', () => {
    alert('Button Clicked!');
});

// EXERCISE 8
const inputField = document.getElementById('inputField');
const resultDiv = document.getElementById('result');

inputField.addEventListener('input', function() {
    resultDiv.textContent = inputField.value;
});


// EXERCISE 9
const toggleBtn = document.getElementById('toggleBtn');
const contentDiv = document.getElementById('content');

toggleBtn.addEventListener('click', () => {
    contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
});



// EXERCISE 10
const nameInput = document.getElementById('nameInput');

nameInput.placeholder = 'Insert your name';
