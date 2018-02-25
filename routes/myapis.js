var mongoose = require('mongoose'),
dbUrl    = 'mongodb://localhost:27017/college';

mongoose.connect(dbUrl, function (err, res) {
 if (err) { 
   console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
 } else {
   console.log ('Successfully connected to: ' + dbUrl);
 }
});
var mongoos = require('mongoose')
var dbUrl = 'mongodb://localhost:27017/collage'
var dbConn = mongoos.createConnection(dbUrl)
var schema = mongoos.Schema({ title : String, text : String})
var post = dbConn.model('post',schema,'posts')
post.find({}, function(err,res){
if (err)
{
console.log("errors " + err)
process.exit(1)
}
else
{
console.log("Response " + res)
process.exit(1)
}
})