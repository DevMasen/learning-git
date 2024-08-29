const btn = document.querySelector(".btn");

const randInt = (start = 0, end = 0) =>
	Math.floor(Math.random() * (Math.abs(end - start) + 1) + start);

const generateColor = () =>
	`rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

btn.addEventListener("click", () => {
	const randomColor = generateColor();
	btn.style.backgroundColor = randomColor;
});

// This change detechted from github by DevMasen
// Please add some feature and push again.

const now = new Date();
const formatedDate = new Intl.DateTimeFormat('en-US',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}).format(now);
console.log(formatedDate);

const html = `<h3>Enter Time : ${formatedDate}</h3>`;
document.body.insertAdjacentHTML('beforeend',html);