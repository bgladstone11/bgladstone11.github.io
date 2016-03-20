
	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);
	//this command above allows us to log the information in the console
	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age>=18) {

		console.log('User is an adult.');

	 } else if (age >= 13) {
	 	console.log('User is a teenager.');

	} else if (age <=-5) {
		console.log('User is not born yet.');

	}

	if (firstName=='General'&&lastName!=='Assembly') {
		console.log('General, how nice to see you.');
	}


	var faveColour = prompt('What is your favourite colour?');

	if (faveColour==='red'||
		faveColour==='blue'||
		faveColour==='green'||
		faveColour==='yellow'); {
		$ ('h1').css('color', faveColour);

		}		
	





