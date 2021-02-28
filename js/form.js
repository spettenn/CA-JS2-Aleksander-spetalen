const submit = document.querySelector('#submit');
const firstNameError = document.querySelector('.nameError');
const lastNameError = document.querySelector('.lastnameError');
const emailError = document.querySelector('.emailError');

submit.onclick = function (event) {
	event.preventDefault();
	const name = document.querySelector('#name').value.trim();
	const email = document.querySelector('#email').value.trim();
	const subject = document.querySelector('#subject').value.trim();
    const adress = document.querySelector('#adress').value.trim();


	if (testLen(name, 0)) {
		nameError.style.display = 'none';
	} else {
		nameError.style.display = 'block';
	}

	if (testEmail(email)) {
		emailError.style.display = 'none';
	} else {
		emailError.style.display = 'block';
	}

    if (subject.length >= 10) {
		subjectError.style.display = 'none';
	} else {
		subjectError.style.display = 'block';
	}

    if (adress.length >= 10) {
		adressError.style.display = 'none';
	} else {
		adressError.style.display = 'block';
	}
};
function testLen(val, lenToTest) {
	if (val.length > lenToTest) {
		return true;
	} else {
		return false;
	}
}

function testEmail(emailAddress) {
	console.log(emailAddress);
	const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
	const result = expression.test(emailAddress); 
	console.log(result);
	return result;
}