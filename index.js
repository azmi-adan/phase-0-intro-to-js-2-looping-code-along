// Code your solutions in this file

function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }
  return messages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";
const result = writeCards(names, eventName);
console.log(result)
let spy;

beforeEach(() => {
  spy = sinon.spy(console, 'log');
});

function countDown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}