var express = require('express');
var bodyParser = require("body-parser");
var knexConf  = require("../../../knexConf");
var knex = require('knex')(knexConf);
var joinjs = require("join-js");
var resultMaps = require("../resultMaps/maps");
var Promise = require('bluebird');
var _ = require("lodash");

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
  var ingredients = recipe.ingredients;
  console.log(recipe);
  console.log("----------------!!!!");
  console.log(ingredients);
  knex.transaction(function(trx){

    knex.insert({id_recipe:recipe.id_recipe, rec_name : recipe.name, rec_chef : recipe.chef ,
                rec_category : recipe.category, rec_preparation : recipe.preparation,
                rec_name_url : recipe.name_url},"id_recipe")
    .into("recipe")
    .transacting(trx)
    .then(function(id_recipe) {
      var id_recipe = id_recipe[0];
      if(_.size(ingredients)>0 || ingredients != undefined){
        return Promise.map(ingredients, function(ing) {
          return knex.insert({id_ingredient : ing.id_ingredient, ing_name : ing.name,
                              ing_amount : ing.amount, ing_id_recipe : id_recipe})
                .into("ingredient").transacting(trx);
        });
      }
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
    res.json(rows);
  });
});

/*** Recipes:NAME_URL ***/
var recipesIDRest = router.route('/recipes/:name_url');

recipesIDRest.get(function(req,res){
  var name_url = req.params.name_url;
  console.log(name_url);
  knex.select().from("recipe as r")
  // .join("ingredient",
  // {"recipe.id_recipe" : "ingredient.ing_id_recipe"})
  .leftJoin("ingredient as i","r.id_recipe","i.ing_id_recipe")
  .where({"r.rec_name_url" : name_url})
  .then(function(rows){
    var rows = joinjs.map(rows, resultMaps.recipe);
    res.json(rows);
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
var recipesIDCommentsRest = router.route('/recipes/:id_recipe/comments')

recipesIDCommentsRest.get(function(req,res){
  var id_recipe = req.params.id_recipe;
  console.log("asdasd" + id_recipe);
  knex.select().from("comment").where({con_id_recipe : id_recipe})
  .then(function(rows){
    res.json(rows);
  });
});

recipesIDCommentsRest.post(function(req,res){
  var id_recipe = req.params.id_recipe;
  var comment = req.body;
  console.log(comment);
  knex.transaction(function(trx){

    knex.insert({id_comment : comment.id_comment, con_name: comment.con_name,
       con_description : comment.con_description, con_id_recipe : id_recipe})
    .into("comment")
    .transacting(trx)
    .then(trx.commit).then(trx.rollback);

  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.error(error);
  });
  res.json({ message: 'post comment' });
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
