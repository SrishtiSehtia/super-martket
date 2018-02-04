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
		img: 'images/cupcake.jpg',
		name: 'Cupcake'
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

var candyItems = [
	{
		img: 'images/ferrero.jpg',
		name: 'ferrero Rocher'
	},
	{
		img: 'images/kitkat.png',
		name: 'Kit Kat'
	},
	{
		img: 'images/pop-rocks.png',
		name: 'Pop Rocks'
	},
	{
		img: 'images/sour-patch.png',
		name: 'Sour Patch'
	},
	{
		img: 'images/twix.jpg',
		name: 'Twix'
	}
];

var candies = document.getElementById('candies');
var bakery = document.getElementById('bakery');
var drinks = document.getElementById('drinks');

candies.addEventListener('click', function() {
  showShoppingItems(candyItems);
})
bakery.addEventListener('click', function() {
  showShoppingItems(bakeryItems);
})


function clearCategoryScreen() {
  document.getElementById('shopping-items').innerHTML = "";
}

function addItemToShoppingCart(name) {
	var shoppingCart = document.querySelector('#shopping-cart ul');
	shoppingCart.innerHTML += '<li>' + name + '></li>';
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
