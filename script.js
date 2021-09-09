const input = document.querySelector('.input');
const button = document.querySelector('button');
const toDoItems = document.querySelector('.to-do-items');
const trashIcon = document.querySelector('.trash');

input.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		addItem();
	}
});

button.addEventListener('click', () => {
	addItem();
});

function addItem() {
	let divParent = document.createElement('div');
	let divChild = document.createElement('div');
	let checkIcon = document.createElement('i');
	let trashIcon = document.createElement('i');

	divParent.className = 'item';
	divParent.innerHTML = `<div>${input.value}</div>`;

	checkIcon.className = 'fas fa-check-square check';
	checkIcon.style.color = 'lightgray';

	checkIcon.addEventListener('click', () => {
		checkIcon.style.color = 'limegreen';
		(divParent.style.textDecoration = 'line-through'),
			'overline',
			'underline';
		// divParent.style.textDecorationColor = 'limegreen';
	});

	divChild.appendChild(checkIcon);

	trashIcon.className = 'fas fa-trash trash';
	trashIcon.style.color = 'darkgray';
	trashIcon.addEventListener('click', () => {
		//! divParent.classList.add('fadeout');
		divParent.remove();
	});

	//! ^^^^^^ Above wont work. how to add animation before remove()???

	divChild.appendChild(trashIcon);

	divParent.appendChild(divChild);

	toDoItems.appendChild(divParent);

	input.value = '';
}
