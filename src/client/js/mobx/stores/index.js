import RecipeStore from './RecipeStore';
import CategoryStore from "./CategoryStore";
import ViewStore from "./ViewStore";
import CommentStore from "./CommentStore";

export const recipeStore = new RecipeStore();
export const categoryStore = new CategoryStore();
export const viewStore = new ViewStore();
export const commentStore = new CommentStore();

//test
// window.categoryStore = categoryStore;
window.viewStore = viewStore;
