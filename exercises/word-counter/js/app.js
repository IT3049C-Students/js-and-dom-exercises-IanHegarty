// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.querySelector('#text');
const stats = document.querySelector('#stat');


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textArea.addEventListener('input', () => {
	let charLength = (textArea.value).length;
	let wordCount = (textArea.value).split(' ').length - 1;
	stats.innerHTML = "You've written " + wordCount + " words and " + charLength + " characters.";
});

