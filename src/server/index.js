var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

var port = process.env.PORT || "3000"
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("src/client")));

/*** html landing page ***/
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/index.html"));
});
/***/

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'cookbook'
  }
});

/*** API rest ***/
/*** Recipes ***/
var recipesRest = router.route('/recipes');

recipesRest.get(function(req,res){
  knex.select().from("recipe")
  .join("ingredient",
  {"recipe.id_recipe" : "ingredient.id_recipe"})
  .then(function(rows){
    console.log(rows);
    res.json(JSON.parse(JSON.stringify(rows)));
  });
});

recipesRest.post(function(req,res){
  res.json({ message: 'post recipes' });
});

/*** Recipes/Category:ID ***/
var recipesCategoryRest = router.route('/recipes/category/:id');

recipesCategoryRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("recipe").join("ingredient",
  {"recipe.id_recipe" : "ingredient.id_recipe"})
  .where({id_category : id})
  .then(function(rows){
    console.log(rows);
    res.json(JSON.parse(JSON.stringify(rows)));
  });
});

/*** Recipes:ID ***/
var recipesIDRest = router.route('/recipes/:id');

recipesIDRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("recipe").join("ingredient",
  {"recipe.id_recipe" : "ingredient.id_recipe"})
  .where({id_recipe : id})
  .then(function(rows){
    console.log(rows);
    res.json(JSON.parse(JSON.stringify(rows)));
  });
});

recipesIDRest.put(function(req,res){
  var id = req.params.id;
  var body = req.body;
  knex.transaction(function(trx){

    knex("recipe").where({id_recipe : id})
    .update(body).transacting(trx)
    then(trx.commit).then(trx.rollback);

  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.error(error);
  });
});


recipesIDRest.delete(function(req,res){
  var id = req.params.id;
  knex.transaction(function(trx){

    knex("recipe").where({id_recipe : id}).del()
    .transacting(trx)
    then(trx.commit).then(trx.rollback);

  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.error(error);
  });
});


/*** Categories ***/
var categoriesRest = router.route('/categories')

categoriesRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("category").then(function(rows){
    res.json(JSON.parse(JSON.stringify(rows)));
  });
});

app.use('/api', router);
/***/

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
