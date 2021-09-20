const express = require ("express");
const app = express();

app.use(express.static("public"));
app.set ("view engine", "ejs");

const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var items = [];

app.get("/", function (req,res){
  var today = new Date();

  var options =  {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {Date:day, newListItems: items});

});

app.post ("/", function(req, res){

  item = req.body.newItem;

  items.push(item);
  res.render ("list", {newItem:item});
  res.redirect("/");

});


app.listen (process.env.PORT || 3000, function(){
  console.log ("Server is running");
});
