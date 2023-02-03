/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const products = [
	{
		productId: 1,
		name: "Beef - Rib Eye Aaa",
		quantity: 0,
		price: 20.29,
		image: "./images/Beef.avif",
	},
	{
		productId: 2,
		name: "Cake - Bande Of Fruit",
		quantity: 0,
		price: 22.02,
		image: "./images/Cake.avif",
	},
	{
		productId: 3,
		name: "Spice - Greek 1 Step",
		quantity: 0,
		price: 16.29,
		image: "./images/Spice.avif",
	},
	{
		productId: 4,
		name: "Tea - Apple Green Tea",
		quantity: 0,
		price: 13.27,
		image: "./images/Tea.avif",
	},
	{
		productId: 5,
		name: "Bagel - Sesame Seed",
		quantity: 0,
		price: 5.72,
		image: "./images/Bagel.avif",
	},
	{
		productId: 6,
		name: "Contreau",
		quantity: 0,
		price: 27.14,
		image: "./images/Contreau.avif",
	},
	{
		productId: 7,
		name: "Compound - Orange",
		quantity: 0,
		price: 14.32,
		image: "./images/Orange.avif",
	},
	{
		productId: 8,
		name: "Wine - Red, Metus Rose",
		quantity: 0,
		price: 11.18,
		image: "./images/Wine.avif",
	},
];
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function getproductByIdFromList(productId, productList) {
	return productList.find((product) => product.productId === productId);
}

function addProductToCart(productId) {
	const product = getproductByIdFromList(productId, products);
	if (!cart.includes(product)) {
		product.quantity = 1;
		cart.push(product);
	} else {
		increaseQuantity(productId);
	}
	// return cart;
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
	const product = getproductByIdFromList(productId, cart);
	product.quantity += 1;
	
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
	const product = getproductByIdFromList(productId, cart);
	product.quantity -= 1;
	if (product.quantity === 0) {
		removeProductFromCart(product.productId);
	}	
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
	const product = getproductByIdFromList(productId, cart);
	product.quantity = 0;
	cart.splice(cart.indexOf(product), 1);
	
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
	return (cart = []);
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(amount) {
	totalPaid += amount;
	return totalPaid - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
	products,
	addProductToCart,
	increaseQuantity,
	decreaseQuantity,
	removeProductFromCart,
	cartTotal,
	pay,
	emptyCart,
	cart,
	/* Uncomment the following line if completing the currency converter bonus */
	// currency
};