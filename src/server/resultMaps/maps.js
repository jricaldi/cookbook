var maps = {};

maps.recipe = [
    {
        mapId: 'recipeMap',
        idProperty: 'id_recipe',
        properties : ["name", "id_category","chef","description",
        "created","updated","name_url"],
        collections: [
            {name: 'ingredients', mapId: 'ingredientMap'}
        ]
    },
    {
        mapId: 'ingredientMap',
        idProperty: 'id_ingredient',
        properties : ["name","amount"]
    }
];

module.exports = maps;
