var express = require('express');
var bodyParser = require("body-parser");
var knexConf  = require("../../../knexConf");
var knex = require('knex')(knexConf);
var joinjs = require("join-js");
var resultMaps = require("../resultMaps/maps");

app = express();
var router = express.Router();

/*** API rest ***/
/*** Recipes ***/
var recipesRest = router.route('/recipes');

recipesRest.get(function(req,res){
  knex.select().from("recipe")
  // .leftJoin("ingredient as i","r.id_recipe","i.ing_id_recipe")
  .then(function(rows){
    // var rows = joinjs.map(rows, resultMaps.recipe);
    res.json(rows);
  });

});

recipesRest.post(function(req,res){
  var recipe = req.body;
  var ingredients = req.body.ingredients;
  knex.transaction(function(trx){

    knex.insert({id_recipe:recipe.id, rec_name : recipe.name, rec_chef : recipe.chef ,
                rec_category : recipe.category, rec_preparation : recipe.preparation},"id_recipe")
    .into("recipe")
    .transacting(trx)
    .then(function(id_recipe) {
      return Promise.map(ingredients, function(ing) {
        return knex.insert({id_ingredient:ing.id, ing_name:ing.name,
                            ing_amount: ing.amount, ing_id_recipe:id_recipe})
              .into("ingredient").transacting(trx);
      });
    })
    .then(trx.commit).then(trx.rollback);

  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.error(error);
  });
  res.json({ message: 'post recipes' });
});

/*** Recipes/Category:ID ***/
var recipesCategoryRest = router.route('/recipes/category/:category');

recipesCategoryRest.get(function(req,res){
  var category = req.params.category;
  knex.select().from("recipe")
  // .join("ingredient",
  // {"recipe.id_recipe" : "ingredient.ing_id_recipe"})
  .where({rec_category : category})
  .then(function(rows){
    res.json(JSON.parse(JSON.stringify(rows)));
  });
});

/*** Recipes:ID ***/
var recipesIDRest = router.route('/recipes/:id');

recipesIDRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("recipe").join("ingredient",
  {"recipe.id_recipe" : "ingredient.ing_id_recipe"})
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
    .then(trx.commit).then(trx.rollback);

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
    .then(trx.commit).then(trx.rollback);

  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.error(error);
  });
});

/*** Recipes:ID Comments ***/
var recipesIDCommentsRest = router.route('/recipes/:id/comments:')

recipesIDCommentsRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("comment").where({id_recipe : id})
  .then(function(rows){
    res.json(rows);
  });
});


/*** Categories ***/
var categoriesRest = router.route('/categories')

categoriesRest.get(function(req,res){
  var id = req.params.id;
  knex.select().from("category")
  .then(function(rows){
    res.json(rows);
  })
  .catch(()=>{
    res.json(["pastas","salads","meat","desserts"]);
  });
});

module.exports = router;
