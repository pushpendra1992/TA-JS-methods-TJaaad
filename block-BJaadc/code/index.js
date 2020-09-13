let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`The length of "${message}" is "${message.length}`);

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of "${meaasge}" is ${message.charAt(0)}`)

// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The last character of "${meaasge}" is ${message.charAt(message.length-1)}`)

// Log the index of word "you" in message
console.log(message.indexOf("you"))

// Log the index of word "still" in message
console.log(message.indexOf("still"))

// Log the index of word "answers" in message
console.log(message.indexOf("answer"))

// Log true or false based on whether the word "answers" exist in message or not
console.log(message.includes("answer"))

// Log true or false based on whether the word "they" exist in message or not
console.log(message.includes("they"))

// Log true or false based on whether the word "is" exist in message or not
console.log(message.includes("is"))
// Log true or false based on whether the word "Is" exist in message or not
console.log(message.includes("Is"))
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
let str = message.slice(3, 6);
console.log(str.includes("you"));
// Check and log whether the word from index 7 to 8 is "a" or not
let str = message.slice(7, 8);
console.log(str.includes("a"));

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
let str = message.slice(-3);
console.log(str.includes("no!"));

// Check and log whether the last 5 character in message is "no!" or not
let str = message.slice(-5);
console.log(str.includes("no!"));

// Check and log whether the last 5 character in message is "no!" or not
let str = message.slice(-5);
console.log(str.includes("no!"));

// Log the message variable, all in lowecase
console.log(message.toLowerCase())

// Log the message variable, all in uppercase
console.log(message.toUpperCase())

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
var regex = /are/gi;
var newMessage = message.replace(regex, `can't`)

// Replace the word "still" to "" (empty), and re-assign the output to the variable `newMessage` and log it.
var regex = /still/gi;
var newMessage = message.replace(regex, "")

// Replace the word "thinking" to "decide", and re-assign the output to the variable `newMessage` and log it.
var regex = /thinking/gi;
var newMessage = message.replace(regex, "decide")

// Replace the word "thinking" to "decide", and re-assign the output to the variable `newMessage` and log it.
var regex = /thinking/gi;
var newMessage = message.replace(regex, "decide")

// Log all the characters from the message variable (you can user for..of loop on string)
for (char of message) {
    console.log(char)
}

// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split(" ");

// Log all the words of messageArray
for (let i = 0; i < messageArray.length; i++) {
    console.log(messageArray[i]);
}