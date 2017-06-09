(function() {

	var app = angular.module('app-ltb', []);

	app.controller('StoreController', function() {
		this.products = items;
		
		this.products.showAll = true;
		
		this.getProduct = function(id){
			return this.products[id];
		};
		
		this.loadRating = function(product){
			var reviewAmount = product.reviews.length;
			var ratingSum = 0;
			for(var i = 0; i < reviewAmount; i++){
				ratingSum += product.reviews[i].star;
			}
			product.rating =  (((ratingSum/(reviewAmount*5))*100))+'%';
		};
		this.showAll = function(showAll, id){
			this.products.showAll = showAll;
			if(showAll){
				this.currentProduct = {};
				this.products.review = false;
			}else{
				this.currentProduct = this.products[id];
			}
			
			this.review = function(review, id){
				this.products.review = review;
			}
			
		};
	});

	var items = [
			{
				name : 'Item1 - name lentgh max 30 char', /* name cannot be longer than 35 characters */
				id : 0,
				price : 2.34,
				description : "Pink shell coveted, 6 cm with 12 beads",
				author : "JimmyDeantheonehatisverylongtotest@example.org",
				category : "Adults \n",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 1,
				images : "image/image_large1.jpg",
				reviews : [
						{
							star : 2,
							body : "This is the review for item1. will this grow? if I add more stuff to it, lets test it to see"
									+ "I think this gem was just OK, could honestly use more shine, IMO."
									+ "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem",
							author : "JimmyDean@example.org",
							createdOn : 1397490980837
						}, {
							star : 3,
							body : "Any gem with 12 faces is for me!",
							author : "gemsRock@example.org",
							createdOn : 1397490980837
						} ]
			},
			{
				name : 'Item 2',
				id : 1,
				price : 6,
				description : "This is the description for item2",
				category : "Adults",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large2.jpg",
				reviews : [ {
					star : 5,
					body : "I think this gem was just OK,",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				} ]
			},
			{
				name : 'Item 3',
				id : 2,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 2,
				images : "image/image_large3.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			},
			{
				name : 'Item 4',
				id : 3,
				price : 2.34,
				description : "This is the dZircon is our most coveted and sought after gem. testing the length of this",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 5,
				images : "image/image_large4.jpg",
				reviews : [
						{
							star : 3,
							body : "This is the review for item1. will this grow? if I add more stuff to it, lets test it to see"
									+ "I think this gem was just OK, could honestly use more shine, IMO."
									+ "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem",
							author : "JimmyDean@example.org",
							createdOn : 1397490980837
						}, {
							star : 4,
							body : "Any gem with 12 faces is for me!",
							author : "gemsRock@example.org",
							createdOn : 1397490980837
						} ]
			},
			{
				name : 'Item 5',
				id : 4,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				rating : 3,
				color : '#000',
				faces : 3,
				images : "image/image_large5.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			},
			{
				name : 'Item 6',
				id : 5,
				price : 6,
				description : "This is the description for item2",
				category : "Adults",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 5,
				images : "image/image_large6.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK,",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				} ]
			},
			{
				name : 'Item 7',
				id : 6,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 4,
				images : "image/image_large7.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			},
			{
				name : 'Item 8',
				id : 7,
				price : 2.34,
				description : "This is the dZircon is our most coveted and sought after gem",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large8.jpg",
				reviews : [
						{
							star : 3,
							body : "This is the review for item1. will this grow? if I add more stuff to it, lets test it to see"
									+ "I think this gem was just OK, could honestly use more shine, IMO."
									+ "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem",
							author : "JimmyDean@example.org",
							createdOn : 1397490980837
						}, {
							star : 4,
							body : "Any gem with 12 faces is for me!",
							author : "gemsRock@example.org",
							createdOn : 1397490980837
						} ]
			}, {
				name : 'Item 9',
				id : 8,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large1.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}, {
				name : 'Item 10',
				id : 9,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large2.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}, {
				name : 'Item 11',
				id : 10,
				price : 6,
				description : "This is the description for item 11",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large3.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}, {
				name : 'Item 12',
				id : 11,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large4.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}, {
				name : 'Item 13',
				id : 12,
				price : 6,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large5.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}, {
				name : 'Item 14',
				id : 13,
				price : 1000000,
				description : "This is the description for item3",
				category : "Kids",
				shine : 70,
				rarity : 2,
				color : '#000',
				faces : 6,
				rating : 3,
				images : "image/image_large6.jpg",
				reviews : [ {
					star : 3,
					body : "I think this gem was just OK, could honestly use more shine, IMO.",
					author : "JimmyDean@example.org",
					createdOn : 1397490980837
				}, {
					star : 4,
					body : "Any gem with 12 faces is for me!",
					author : "gemsRock@example.org",
					createdOn : 1397490980837
				} ]
			}

	];

})();
