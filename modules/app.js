(function() {
	var app = angular.module("store", []);

	app.controller("StoreController", function(){
		this.products  = gems;
	}); 

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: "This is a very famouse product that i don\'t really know it!",
			soldOut:true,
			canPurchase: false,
		},
		{
			name: 'kljfas',
			price: 2.95,
			description: "This is a very famouse product that i don\'t really know it!",
			soldOut: false,
			canPurchase: true,
		},
	];

})();