var bakeryItems = [
	{
		img: 'images/cake.jpg',
		name: 'Cake'
	},
	{
		img: 'images/croissant.jpg',
		name: 'Croissant'
	},
	{
		img: 'images/strawberry-cheesecake.jpg',
		name: 'Strawberry Cheesecake'
	},
	{
		img: 'images/donut.jpg',
		name: 'Donut'
	},
	{
		img: 'images/scone.jpg',
		name: 'Scone'
	}
];

var miniSweetsItems = [
	{
		img: 'images/fruit-tarts.jpg',
		name: 'Ferrero Rocher'
	},
	{
		img: 'images/heart-cookies.jpg',
		name: 'Heart Cookies'
	},
	{
		img: 'images/macaroons.jpg',
		name: 'Macaroons'
	},
	{
		img: 'images/mini-cupcakes.jpg',
		name: 'Mini Cupcakes'
	},
	{
		img: 'images/strawberry-cookies.jpg',
		name: 'Strawberry Cookies'
	}
];

var drinkItems = [
	{
		img: 'images/iced-mexican-coffee.jpg',
		name: 'Iced Mexican Coffee'
	},
	{
		img: 'images/dessert-coffee.jpg',
		name: 'Dessert Coffee'
	},
	{
		img: 'images/jasmine-tea.jpg',
		name: 'Jasmine Tea'
	},
	{
		img: 'images/black-tea.jpg',
		name: 'Black Tea'
	},
	{
		img: 'images/strawberry-rasberry-smoothie.jpg',
		name: 'Strawberry Raspberry Smoothie'
	}
];

var miniSweets = document.getElementById('mini-sweets');
var bakery = document.getElementById('bakery');
var drinks = document.getElementById('drinks');

miniSweets.addEventListener('click', function() {
  showShoppingItems(miniSweetsItems);
})
bakery.addEventListener('click', function() {
  showShoppingItems(bakeryItems);
})
drinks.addEventListener('click', function() {
  showShoppingItems(drinkItems);
})

function clearCategoryScreen() {
  document.getElementById('shopping-items').innerHTML = "";
}

function addItemToShoppingCart(name) {
	var shoppingCart = document.querySelector('#shopping-cart ul');
	shoppingCart.innerHTML += '<li>' + name + '</li>';

}

function showShoppingItems(category) {
  clearCategoryScreen()
  var newList = document.createElement('ul');
  for (var i = 0; i < category.length; i++) {
		newList.innerHTML += '<li> <img src=' + category[i].img +'></li>';
    // newList.innerHTML += ( `<li> <img src = "${category[i].img}" onclick = "addItemToShoppingCart(${category[i].name})"> </li>`);
  }
  document.getElementById('shopping-items').appendChild(newList);
	var allImages = document.querySelectorAll('img');
	for (var i = 0; i < allImages.length; i++) {
		addEventListener(allImages[i], category[i]);
	}
}

function addEventListener(itemImg, category) {
	itemImg.addEventListener('click', function() {
		addItemToShoppingCart(category.name)
	})
}
