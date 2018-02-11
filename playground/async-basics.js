

console.log(`starting app`);

setTimeout(() => {
    console.log('Inside of the callback');
}, 2000);

setTimeout(() => {
    console.log('This is the second timeout!')
}, 0);



console.log('finishing up');