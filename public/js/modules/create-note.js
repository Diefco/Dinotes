import { dFancyBox, fancyInteractions } from '../dfancybox.js';

// references
const addNoteBtn = document.querySelector('#add-note'),
	noSelectedNote = document.querySelector('#no-selected-note'),
	singleNote = document.querySelector('#single-note'),
	noteTitleHTML = document.querySelector('#note-title'),
	noteContentHTML = document.querySelector('#note-content');

addNoteBtn.addEventListener('click', () => {
	btnNewNote();
});

function btnNewNote() {
	if (
		noteTitleHTML.innerHTML.length > 0 ||
		noteContentHTML.innerHTML.length > 0
	) {
		// Ask if you want to delete
		dFancyBox({
			title: '¿Desea crear una nota nueva?',
			msg: 'No has guardado la nota actual, si creas una nota nueva perderas los cambios realizados <strong>¿Estas seguro?</strong>',
			icon: 'fa-circle-exclamation',
			btnConfirm: 'Crear nota',
			btnDenied: 'Cancelar',
		});

		const handleGetUserInteraction = async () => {
			fancyInteractions().then((result) =>
				console.log('create-note', result)
			);
		};

		console.log('Ejecutamos const');
		handleGetUserInteraction();
	}

	createNewNote();
}

function createNewNote() {
	noSelectedNote.classList.add('hidden');
	singleNote.classList.remove('hidden');
	singleNote.setAttribute('note-id', new Date());
}
