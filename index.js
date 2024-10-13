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

