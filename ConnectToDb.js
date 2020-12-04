/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Website:Password1@cluster0.cykhi.mongodb.net/PersonalWebsite?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
*/


function tester() {
	document.write("Hello");
}

function init() {
	var MongoClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://Website:Password1@cluster0.cykhi.mongodb.net/PersonalWebsite?retryWrites=true&w=majority";
	var client = new MongoClient(uri, {useUnifiedTopology: true})

	client.connect(err => {
		if(err) {
			console.log('Error'); 
		}
		console.log('Connected..'); 
		const recipe = client.db("PersonalWebsite").collection("tblRecipe"); 
		
		client.close(); 

	}); 
	
	if(1==1) {
		document.write("No Issue"); 

	}
	else {
		document.write("Issues"); 
	}
}
/*
function getMostRecent() {
	document.write("Hello World"); 
	client.connect(err => {
	  const recipe = client.db("PersonalWebsite").collection("tblRecipe");
	  const ingredient = client.db("PersonalWebsite").collection("tblIngredient");
	  const instruction = client.db("PersonalWebsite").collection("tblInstruction");
	  // perform actions on the collection object
	  var mySort = {When: -1};
	  document.write("zero"); 
	  recipe.findOne().sort(mySort).toArray(function(err, result) {
		  if(err) throw document.write(err);
		  document.write(recipe.Name);
	  })
	  client.close();
	  document.write("One");
	});
	document.write("Two");
}*/
/* 

function getTopRecipe() {
	client.connect(err => {
	  const recipe = client.db("PersonalWebsite").collection("tblRecipe");
	  const ingredient = client.db("PersonalWebsite").collection("tblIngredient");
	  const instruction = client.db("PersonalWebsite").collection("tblInstruction");
	  // perform actions on the collection object
	  client.close();
	});	
}

function getBread() {
	client.connect(err => {
	  const recipe = client.db("PersonalWebsite").collection("tblRecipe");
	  const ingredient = client.db("PersonalWebsite").collection("tblIngredient");
	  const instruction = client.db("PersonalWebsite").collection("tblInstruction");
	  // perform actions on the collection object
	  client.close();
	});	
}

function getDessert() {
	client.connect(err => {
	  const collection = client.db("PersonalWebsite").collection("devices");
	  // perform actions on the collection object
	  client.close();
	});
}

function getMeal() {
	client.connect(err => {
	  const collection = client.db("PersonalWebsite").collection("devices");
	  // perform actions on the collection object
	  client.close();
	});

	
}
*/