// /* Interaction in the interface of the #note-simple */
// const singleNote = document.querySelector('#single-note'),
// 	actionBack = document.querySelector('#back-notes-list'),
// 	saveNote = document.querySelector('#save-note'),
// 	noteTitle = document.querySelector('#note-title'),
// 	noteContent = document.querySelector('#note-content');

// /* Events */

// // Evaluamos si el click esta dentro o fuera de las areas que buscamos.
// document.addEventListener('click', (event) => {
// 	let clickTarget = event.target;
// 	do {
// 		if (clickTarget == noteTitle) {
// 			//noteTitle.textContent = 'El titulo fue clickeado';
// 			placeholderValidate(noteTitle);
// 			return;
// 		} else if (clickTarget == noteContent) {
// 			//noteContent.textContent = 'El contenido fue clickeado';
// 			placeholderValidate(noteContent);
// 			return;
// 		}

// 		// If not ID == True find parent.
// 		clickTarget = clickTarget.parentNode;
// 	} while (clickTarget);

// 	// This click is a click outside
// 	console.log('Fue fuera del titulo');
// });

// /* functions */
// function placeholderValidate(element) {
// 	/* validate if content */
// 	element.querySelector('.dinamyc_placeholder')
// 		? (element.innerHTML = '<textarea></textarea>')
// 		: console.log('No existe placeholder');
// }
