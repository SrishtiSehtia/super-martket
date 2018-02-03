var shoppingCart = [];

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
var image = document.querySelector('img');

// candies.addEventListener('click', function() {
//   var newList = document.createElement('ul');
//   for (var i = 0; i < bakeryItems.length; i++) {
//     newList.innerHTML += '<li> <img src="'+ bakeryItems[i].img+'"></li>';
//   }
//   document.getElementById('shopping-items').appendChild(newList);
// })



candies.addEventListener('click', function() {
  addShoppingItems(candyItems);
})
bakery.addEventListener('click', function() {
  addShoppingItems(bakeryItems);
})

function clearShoppingList() {
  document.getElementById('shopping-items').innerHTML = "";
}

function addItemToShoppingCart(name) {
  console.log('event has been triggered')
}

function addShoppingItems(category) {
  clearShoppingList()
  var newList = document.createElement('ul');
  for (var i = 0; i < category.length; i++) {
    newList.innerHTML += '<li> <img src=' + category[i].img +'></li>';
    // newList.innerHTML += ( `<li> <img src = "${category[i].img}" onclick = "addItemToShoppingCart(${category[i].name})"> </li>`);
  // }
  document.getElementById('shopping-items').appendChild(newList);
  console.log([newList]);
  // for (var i = 0; i < newList.length; i++) {
  //   newList[i].addEventListener('click', function(){
  //     console.log('event handler added');
  //   })
  }
}



// var foods = document.querySelector('nav');
// foods.addEventListener('click', function(event) {
//   console.log([event.target]);
//   console.log(event);
//   if (event.target.tagName === 'A') {
//     console.log(event.target.textContent);
//   }
// })
//
// function showImages(category) {
//   console.log("I JUST GOT CLICKED")
//   category.style.display = "inline";
// }
//
// console.log("CANDIES:", candies)
// candies.addEventListener('click', showImages);
