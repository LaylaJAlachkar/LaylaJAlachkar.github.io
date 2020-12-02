const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Website:Password1@cluster0.cykhi.mongodb.net/PersonalWebsite?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


function getMostRecent() {
	client.connect(err => {
	  const recipe = client.db("PersonalWebsite").collection("tblRecipe");
	  const ingredient = client.db("PersonalWebsite").collection("tblIngredient");
	  const instruction = client.db("PersonalWebsite").collection("tblInstruction");
	  // perform actions on the collection object
	  var mySort = {When: -1}
	  echo "Hello"
	  recipe.findOne().sort(mySort).toArray(function(err, result) {
		  if(err) throw err;
		  each recip in recipe
		  
		  //build new table row
		  tr
			//insert table data
			td #{recipe.Name}
	  }
	  client.close();
	});
}

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
