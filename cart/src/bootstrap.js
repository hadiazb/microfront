import faker from 'faker';

const mount = (el) => {
	const cartText = `${faker.random.number(
		10
	)}  number of products in your cart`;
	el.innerHTML += cartText;
	el.style.margin = '10px';
};

// Context/Situation #1
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-cart');
	if (el) {
		mount(el);
	}
}

// Context/Situation #2
export { mount };
