var maps = {};

maps.recipe = [
    {
        mapId: 'recipeMap',
        idProperty: 'id_recipe',
        properties : ["rec_name", "rec_category","rec_chef","rec_preparation",
        "rec_created","rec_updated","rec_name_url" ,"rec_score"],
        collections: [
            {name: 'ingredients', mapId: 'ingredientMap'}
        ]
    },
    {
        mapId: 'ingredientMap',
        idProperty: 'id_ingredient',
        properties : ["ing_name","ing_amount"]
    }
];

module.exports = maps;
