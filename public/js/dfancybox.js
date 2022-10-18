'use strict';
function createNewBox() {
	let div = document.createElement('div');
	const fancyContentHtml = document.createElement('div');
	const fancyHtmlId = document.querySelector('#dFancyBox');

	// Clear old boxes
	if (fancyHtmlId) {
		fancyHtmlId.remove();
	}

	// Create new box
	div.id = 'dFancyBox';
	fancyContentHtml.classList = 'fancyContent';
	div.appendChild(fancyContentHtml);

	document.querySelector('body').appendChild(div);
	console.log('Se creo un fancybox');
}

function closeFancy() {
	const fancyHtmlId = document.querySelector('#dFancyBox');
	fancyHtmlId.remove();
}

// Interactions
export const fancyInteractions = () => {
	return new Promise(function (resolve, reject) {
		document
			.querySelector('#dFancyBox')
			.addEventListener('click', (event) => {
				let interaction;
				if (event.target.id === 'dFancyBox') {
					console.log(1);
					closeFancy();
					interaction = false;
				}
				if (event.target.classList.contains('fancy-btnDenied')) {
					console.log(2);
					closeFancy();
					interaction = false;
				}
				if (event.target.classList.contains('fancy-btnConfirm')) {
					console.log(3);
					closeFancy();
					interaction = true;
				}
				//reject(new Error('Error!'));
				resolve(interaction);
			});
	});
};

export const dFancyBox = ({ title, msg, icon, btnConfirm, btnDenied }) => {
	createNewBox();

	// We declare the constant after creating the div in createNewBox().
	const fancyHtmlId = document.querySelector('#dFancyBox'),
		fancyContentHtml = document.querySelector('.fancyContent');

	if (icon) {
		fancyContentHtml.innerHTML += `<div class="fancy-icon"><i class="fa ${icon}"></i></div>`;
	}
	if (title) {
		fancyContentHtml.innerHTML += `<div class="fancy-title">${title}</div>`;
	}
	if (msg) {
		fancyContentHtml.innerHTML += `<div class="fancy-msg">${msg}</div>`;
	}
	if (btnConfirm) {
		fancyContentHtml.innerHTML += `<button class="fancy-btnConfirm fancy-button">${btnConfirm}</button>`;
	}
	if (btnDenied) {
		fancyContentHtml.innerHTML += `<button class="fancy-btnDenied fancy-button">${btnDenied}</button>`;
	}
};
