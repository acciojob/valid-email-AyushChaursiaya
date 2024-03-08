function validEmail(str) {
  //your JS code here.
  // Regular expression to match email format
	// const emailRegex = /^[a-zA-Z0-9.,_%+-]+@[a-zA-A-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Check if the input string matches the email format
	// return emailRegex.test(str);
const emailRegex = /[a-zA-Z0-9.,_-%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(str);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
