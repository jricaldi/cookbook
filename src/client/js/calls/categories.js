import {categories} from "../dataTemp/categories";
import {debug} from "../../../../global_config";

export function getCategories(){


    return $.get("/api/categories");

}
