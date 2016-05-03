import RecipeStore from './RecipeStore';
import CategoryStore from "./CategoryStore";
import ViewStore from "./ViewStore";

export const recipeStore = new RecipeStore();
export const categoryStore = new CategoryStore();
export const viewStore = new ViewStore();

//test
// window.categoryStore = categoryStore;
window.viewStore = viewStore;
