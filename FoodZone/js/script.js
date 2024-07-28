let	selectorEL = 0;

const element0 = document.querySelector(`.element-0`);
const element1 = document.querySelector(`.element-1`);
const element2 = document.querySelector(`.element-2`);
const element3 = document.querySelector(`.element-3`);

const mainImgEl = document.getElementById(`main-image`);
const image = [`img/red.jpeg`, `img/purple.jpeg`, `img/green.jpeg`, `img/blue.jpeg`];

mainImgEl.classList.add(`animate`);
// mainImgEl.classList.remove(`animate`);
console.log(mainImgEl);
const currEl = document.querySelector(`.element-${selectorEL}`);
currEl.classList.add(`element-scale`);
mainImgEl.src = image[0];

const eventHandler = function(idx) {
	if (idx === selectorEL) { return ; }
	// mainImgEl.style.animation = `RotateIn .5s ease-in-out`;
	const prevEl = document.querySelector(`.element-${selectorEL}`);
	const currEl = document.querySelector(`.element-${idx}`);
	currEl.classList.add(`element-scale`);
	prevEl.classList.remove(`element-scale`);
	selectorEL = idx;
	mainImgEl.classList.remove(`animate`);
	// mainImgEl.setAttribute('class', `main-image`);
	void mainImgEl.offsetWidth;
	mainImgEl.src = image[selectorEL];
	mainImgEl.classList.add(`animate`);
	// mainImgEl.setAttribute('class', `main-image ` + `animate`);
	console.log(mainImgEl);
}

const eventHandler0 = () => eventHandler(0)
const eventHandler1 = () => eventHandler(1)
const eventHandler2 = () => eventHandler(2)
const eventHandler3 = () => eventHandler(3)

element0.addEventListener('click', eventHandler0);
element1.addEventListener('click', eventHandler1);
element2.addEventListener('click', eventHandler2);
element3.addEventListener('click', eventHandler3);
