import {debug} from "../../../../global_config";

export function getComments(id_recipe){
    return $.get("/api/recipes/" + id_recipe + "/comments");
}
