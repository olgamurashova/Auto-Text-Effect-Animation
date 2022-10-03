const container = document.querySelector(".container");

const lines = ["I believe I can fly", "I believe I can touch the sky", "I think about it every night and day", "Spread my wings and fly away"];

let linesIndex = 0;

let charIndex = 0;

updateText();

function updateText (){
    charIndex++
    container.innerHTML = `<h1>${lines[linesIndex].slice(0,charIndex)}</h1>`;
   
    if(charIndex === lines[linesIndex].length){
        linesIndex++
        charIndex = 0;
    }

    if(linesIndex === lines.length){
        linesIndex = 0;
    }
    setTimeout(updateText, 300);

}

//<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex]};
