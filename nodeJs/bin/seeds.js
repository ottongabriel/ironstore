const mongoose = require('mongoose');

const Category = require('../models/category');
const Product = require('../models/product');
// const User = require('../models/user');

const dbName = 'iron-store';
mongoose.connect(`mongodb://localhost/${dbName}`);

Category.collection.drop();
// User.collection.drop();
Product.collection.drop();


// CATEGORY SEEDS
// const categories = [
//   {
//     name: 'Electronics',
//     parent: null
//   },
//   {
//     name: 'Food',
//     parent: null
//   },
//   {
//     name: 'Clothes',
//     parent: null
//   },
//   {
//     name: 'Movies',
//     parent: null
//   },
//   {
//     name: 'Books',
//     parent: null
//   },// END OF PARENT CATEGORIES
// ]


// const childCategories = [
//   {
//     // electronic
//     name: 'TVs'
//   },
//   {
//     // electronic
//     name: 'Video Game Consoles' 
//   },
//   {
//     // electronic
//     name: 'Cellphones'
//   },
//   {
//     // Food
//     name: 'Fruits'
//   },
//   {
//     // Food
//     name: 'Snacks'
//   },
//   {
//     // Food
//     name: 'Meat'
//   },
//   {
//     // Clothes
//     name: 'Shirts'
//   },
//   {
//     // Clothes
//     name: 'Pants'
//   },
//   {
//     // Clothes
//     name: 'Underwear'
//   },
//   {
//     // Movies
//     name: 'Romance'
//   },
//   {
//     // Movies
//     name: 'Horror'
//   },
//   {
//     // Movies
//     name: 'SciFi'
//   },
//   {
//     // Books
//     name: 'Biographies'
//   },
//   {
//     // Books
//     name: 'Fiction'
//   },
//   {
//     // Books
//     name: 'Mystery'
//   }
// ]// END OF CHILD CATEGORIES

/*
// This populates the catgories collection
// all the logic is necessary because child categories depend 
// on the IDs of their parent categories.
// CRAZY WORKAROUND LOGIC BECAUSE I COULD NOT FIGURE OUT AT THE TIME HOW TO CREATE THE ITEMS WITH AN ID AUTOMATICALLY. WILL SAVE FOR FUTURE LAUGHS
*/
// Category.create(categories, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${categories.length} categories`)

//   for(let i = 0; i < categories.length; i++){
//     let theName = categories[i].name;
//     Category.find({name: theName})
//       .then(response => {
//         // console.log('response: ', response);

//         let theId = response[0]._id;
//         // console.log('theId: ', theId);

//         for (let j = 0; j < 3; j++){
//           childCategories[(i*3) + j].parent = theId;
//           // console.log('(i*3) + j: ', (i*3) + j);
//           // console.log('childCategories[i + j]: ', childCategories[i + j]);
//         }

//       }) 
//       .catch(err => console.log(err));
//       setTimeout(() => {
//       }, 300);
//     }
    
//     setTimeout(() => {
//       // console.log(childCategories);
//       Category.create(childCategories, (err) => {
//         if (err) { throw(err) }
//         console.log(`Created ${childCategories.length} child categories`)
//       });
//     }, 4000);
// });





// PRODUCT SEEDS
const products = [
  {"_id":"5b108b36afb1a6d85009d933","name":"Sony TV","price":2000,"description":"4k 50 inches","category":"TVs","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609172/Sony_TV.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d935","name":"Panasonic tv","price":600,"description":"32 inches 1080p","category":"TVs","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609172/panasonic-tv.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d934","name":"LG TV","price":100,"description":"Used, in working condition","category":"TVs","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609172/lg_tv.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d936","name":"Nintendo Switch","price":300,"description":"Ostensibly for kids","category":"Video Game Consoles","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609251/Nintendo_Switch.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d937","name":"XBox One","price":400,"description":"Sports Games and Halo!","category":"Video Game Consoles","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609251/XBox_One.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d938","name":"PS4","price":600,"description":"Too Expensive Right Now","category":"Video Game Consoles","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609251/PS4.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d93c","name":"Pear","price":1,"description":"One single pear","category":"Fruits","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609349/Pear.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d93b","name":"Motorola Moto G","price":120,"description":"2nd generation unlocked","category":"Cellphones","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609296/Moto-G.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d939","name":"iPhone X","price":1000,"description":"Why is it so expensive?","category":"Cellphones","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609296/iPhoneX.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d93a","name":"Samsung Galaxy J3","price":70,"description":"Cheap","category":"Cellphones","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609296/samsung-galaxy-j3.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d93d","name":"Apples","price":5,"description":"1 pound of Fuji Apples","category":"Fruits","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609349/Apples.png","__v":0},
  {"_id":"5b108b36afb1a6d85009d941","name":"Cashews","price":6,"description":"Whole, seasalted, fancy cashews","category":"Snacks","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609396/Cashews.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d940","name":"Doritos","price":2,"description":"you better get some salsa","category":"Snacks","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609396/Doritos.png","__v":0},
  {"_id":"5b108b36afb1a6d85009d93e","name":"Bananas","price":0.69,"description":"Daylight coming, me wan go home","category":"Fruits","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609349/Bananas.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d93f","name":"Cheetoes","price":1,"description":"The spicy kind","category":"Snacks","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609396/Cheetos.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d942","name":"Filet Mignon","price":10,"description":"5 filets","category":"Meat","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609458/Filet_Mignon.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d945","name":"White long sleeve","price":12,"description":"No Iron","category":"Shirts","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610092/White_Long_Sleeve.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d946","name":"Silk","price":60,"description":"Fancy. Hand-wash only","category":"Shirts","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610093/Silk_Shirt.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d943","name":"T-bone","price":4,"description":"One pound T-bone steak","category":"Meat","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609458/T-Bone.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d947","name":"Captain America Shield","price":25,"description":"Limited edition collectors item","category":"Shirts","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610092/CA_Shield_Shirt.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d944","name":"top Sirloin","price":3,"description":"2 pounds of pre-sliced sirloin steaks","category":"Meat","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527609458/Top_Sirloin_Steak.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94a","name":"Jeans","price":45,"description":"You must rip the yourself","category":"Pants","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610504/Jeans.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94b","name":"Boxers","price":15,"description":"Assorted colors","category":"Underwear","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610635/Boxers.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94c","name":"Tighty whities","price":0,"description":"It seems these are still a thing","category":"Underwear","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610635/Tighty_Whities.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d948","name":"Black dress pants","price":40,"description":"No iron","category":"Pants","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610504/Black_Dress_Pants.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d949","name":"Shorts","price":20,"description":"Do they really count as pants?","category":"Pants","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610504/Shorts.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94f","name":"Gone with the Wind","price":10,"description":"Remastered","category":"Romance","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610684/Gone_with_the_Wind.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d950","name":"When Harry met Sally","price":12,"description":"This is a romance movie? I thought it was a comedy.","category":"Romance","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610684/When_Harry_met_Sally.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d951","name":"It","price":13,"description":"Remake of the classic","category":"Horror","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610718/It.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94d","name":"Bra","price":50,"description":"Lacy, confortable (not really)","category":"Underwear","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610635/Bra.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d94e","name":"Love Story","price":10,"description":"1970s movie could not get more on the nose with the title","category":"Romance","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610684/Love_Story.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d954","name":"Back to the Future","price":11,"description":"Where are my flying cars?","category":"SciFi","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610752/Back_to_the_Future.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d955","name":"Star Wars","price":11,"description":"Don't get exited, It's one of the prequels.","category":"SciFi","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610752/Star_Wars.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d956","name":"Star Trek","price":11,"description":"The one with time travel and whales.","category":"SciFi","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610752/Star_Trek.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d952","name":"The Witch","price":11,"description":"I thought that in this post Harry Potter world, you needed something besides a plain witch to be scary.","category":"Horror","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610719/The_Witch.png","__v":0},
  {"_id":"5b108b36afb1a6d85009d953","name":"HellRaiser","price":10,"description":"Acupuncture Gone Wrong","category":"Horror","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610718/HellRaiser.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d959","name":"Abraham Lincoln","price":20,"description":"Feeling patriotic yet?","category":"Biographies","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610824/Abraham_Lincon.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95a","name":"A song of Ice and Fire","price":20,"description":"First book of the acclaimed series. Even crazier than the show if you can believe that.","category":"Fiction","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610868/A_song_of_Ice_and_Fire.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95b","name":"The Lord of the Rings","price":22,"description":"Get ready for a lot of singing and poetry if you have only seen the movies.","category":"Fiction","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610868/The_Lord_of_the_Rings.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d957","name":"Charles Dickens","price":14,"description":"Life of the Romantic writer. Note: not romance","category":"Biographies","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610824/Charles_Dickens.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d958","name":"Emilia Earnhart","price":15,"description":"Life of the dring pilot and the mystery surrounding her death","category":"Biographies","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610824/Emilia_Earnhart.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95e","name":"Murder in the Orient Express","price":11,"description":"By Agatha Christie","category":"Mystery","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610957/Murder_in_the_Orient_Express.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95f","name":"The Outsider","price":14,"description":"By Stephen King","category":"Mystery","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610958/The_Outsider.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95c","name":"Return of the King","price":21,"description":"Last book in the Lord of the Rings trilogy.","category":"Fiction","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610868/Return_of_the_King.jpg","__v":0},
  {"_id":"5b108b36afb1a6d85009d95d","name":"And then there were None","price":13,"description":"By Agatha Christie","category":"Mystery","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1527610957/And_then_there_were_None.png","__v":0}
]

setTimeout(() => {
  Product.create(products, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${products.length} products`)
    // mongoose.connection.close()
  });
}, 1000);
// END PRODUCT SEEDS





// USER SEEDS
//   const users = [
//   {"_id":"5b0c3b80d8b76b089ad6dc33","username":"user","password":"$2a$10$rRZi5rZN5kjEOCvpt02Ez.Cm09YVx46wNQ5Ab76PrEs4oAeAudRx6","email":"user@user.com","role":"USER","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1526028453/Logo_reddit_white.png","__v":0},
//   {"_id":"5b0c3b80d8b76b089ad6dc32","username":"admin","password":"$2a$10$1TAgPLkU2Dv36eltB3veRuUzLo.Ln.XcGTW87S5PZYUWLMHCNj51u","email":"admin@admin.com","role":"ADMIN","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1526028453/Logo_reddit_white.png","__v":0},
//   {"_id":"5b0c3b80d8b76b089ad6dc34","username":"11","password":"$2a$10$rr4iIdIjBUYtnSQ4Tc7GL.AR8f3k9Q7BsSYXaqOH1Zjlx/kLuJZT2","email":"11@11.com","role":"USER","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1526028453/Logo_reddit_white.png","__v":0},
//   {"_id":"5b0ee4495127d0454dc4a97e","email":"emptycart@emptycart.com","username":"emptycart","password":"$2a$10$2KhM64KBWNvRjsBxTkmwte3ZywkbJw77sPxhMonT/aP0CWKM0OoI.","role":"USER","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1526028453/Logo_reddit_white.png","__v":0},
//   {"_id":"5b0f5beb5a61868bab301d81","email":"tester@tester.com","username":"tester","password":"$2a$10$Dn/nlnPzaeB9vYXk1nVtA.k9ZecmYX2sC3VNsyRs7UF14Io/ucmJC","role":"USER","picturePath":"https://res.cloudinary.com/ddibftjux/image/upload/v1526028453/Logo_reddit_white.png","__v":0}
// ]

// setTimeout(() => {
//   User.create(users, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${users.length} users`)
//   });
// }, 1000);

// END USER SEEDS




// CATEGORY SEEDS
const categories = [
  {"_id":"5b108b33afb1a6d85009d932","name":"Books","parent":null,"__v":0},
  {"_id":"5b108b33afb1a6d85009d92f","name":"Food","parent":null,"__v":0},
  {"_id":"5b108b33afb1a6d85009d930","name":"Clothes","parent":null,"__v":0},
  {"_id":"5b108b33afb1a6d85009d92e","name":"Electronics","parent":null,"__v":0},
  {"_id":"5b108b33afb1a6d85009d931","name":"Movies","parent":null,"__v":0},
  {"_id":"5b108b38afb1a6d85009d960","name":"TVs","parent":"5b108b33afb1a6d85009d92e","__v":0},
  {"_id":"5b108b38afb1a6d85009d961","name":"Video Game Consoles","parent":"5b108b33afb1a6d85009d92e","__v":0},
  {"_id":"5b108b38afb1a6d85009d962","name":"Cellphones","parent":"5b108b33afb1a6d85009d92e","__v":0},
  {"_id":"5b108b38afb1a6d85009d964","name":"Snacks","parent":"5b108b33afb1a6d85009d92f","__v":0},
  {"_id":"5b108b38afb1a6d85009d969","name":"Romance","parent":"5b108b33afb1a6d85009d931","__v":0},
  {"_id":"5b108b38afb1a6d85009d968","name":"Underwear","parent":"5b108b33afb1a6d85009d930","__v":0},
  {"_id":"5b108b38afb1a6d85009d965","name":"Meat","parent":"5b108b33afb1a6d85009d92f","__v":0},
  {"_id":"5b108b38afb1a6d85009d96d","name":"Fiction","parent":"5b108b33afb1a6d85009d932","__v":0},
  {"_id":"5b108b38afb1a6d85009d96e","name":"Mystery","parent":"5b108b33afb1a6d85009d932","__v":0},
  {"_id":"5b108b38afb1a6d85009d967","name":"Pants","parent":"5b108b33afb1a6d85009d930","__v":0},
  {"_id":"5b108b38afb1a6d85009d96a","name":"Horror","parent":"5b108b33afb1a6d85009d931","__v":0},
  {"_id":"5b108b38afb1a6d85009d96c","name":"Biographies","parent":"5b108b33afb1a6d85009d932","__v":0},
  {"_id":"5b108b38afb1a6d85009d963","name":"Fruits","parent":"5b108b33afb1a6d85009d92f","__v":0},
  {"_id":"5b108b38afb1a6d85009d966","name":"Shirts","parent":"5b108b33afb1a6d85009d930","__v":0},
  {"_id":"5b108b38afb1a6d85009d96b","name":"SciFi","parent":"5b108b33afb1a6d85009d931","__v":0}
]

setTimeout(() => {
  Category.create(categories, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${categories.length} categories`)
  });
}, 1000);

// END CATEGORY SEEDS

// // END OF FILE