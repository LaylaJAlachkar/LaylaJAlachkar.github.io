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