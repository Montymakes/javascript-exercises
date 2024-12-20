const container = document.getElementById('container');

const poem = document.createElement("p");
poem.textContent = 'Cold noses can be red. Alicia is sometimes blue. When we are together, There\'s love anew.';
container.appendChild(poem);

const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = "we could be blue together <3";
container.appendChild(heading);

const proposal = document.createElement("div");
proposal.style.border = "10px solid black"
proposal.style.backgroundColor = "pink";

const title = document.createElement("h1");
title.textContent = 'Will you kiss me!?'

const begging = document.createElement("p");
begging.textContent = 'lemme feel those huge boobs. i mean those serious honkers. a real set of badonkers. packin some dobonhonkeros. massive dohoonkabhankoloos. big old tonhongerekoogers'

proposal.appendChild(title);
proposal.appendChild(begging);
container.appendChild(proposal);

let kissCounter = 0;
const colorWheel = ['red', 'pink', 'blue', 'black'];
const kissing = () => {
    alert(`You kissed Monty ${++kissCounter} times!`);
    const randomColor = colorWheel[Math.floor(Math.random() * colorWheel.length)];
    btn.style.backgroundColor = randomColor;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", kissing);

btn.addEventListener("click", function (e) {
    console.log(e);
  });

btn.addEventListener("click", function (e) {
console.log(e.target);
});