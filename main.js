const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hello");
// Interpolated
console.log("hello! I am a %s string", "human") //%s adds string in specific place
// Styled
console.log("%c I am some great text", "font-size: 6px; background: green; color: #fff"); //%c changing style for the text
// warning!
console.warn("oh no!") // warning style and on which line
// Error :|
console.error("that's an error") // error style on which line
// Info
console.info("fun fact") //did not work for me
// Testing
console.assert(1 === 1, "That is true") //checking the statement that true, and runs it only if it's wrong/false
console.assert(1 === 2, "That is wrong") //checking the statement that true, and runs it only if its wrong'false

const p = document.querySelector("p");
console.assert(p.classList.contains("yep"), "wrong")
// clearing
console.clear() //clear your console
// Viewing DOM Elements
// to see all available methods and properties
console.dir(p)
// Grouping together
dogs.forEach(dog => {
    //console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})
// counting
console.count("1") //count how many time you used specific word, number etc
console.count("2")
console.count("2")
console.count("2")
console.count("1")
console.count("1")

// timing
console.time("fetching data");
fetch("").then(data => data.json).then(data => {
    console.timeEnd("fetching data")
})

//table
console.table(dogs)