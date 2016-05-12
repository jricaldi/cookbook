import { Constants} from "./Constants";

export function getImageCategory(category){
  category = category.toUpperCase();
  switch (category) {
    case Constants.CATEGORY.PASTAS:
      return "./img/categories/pastas.png";
    case Constants.CATEGORY.MEAT:
      return "./img/categories/meat.png";
    case Constants.CATEGORY.SALADS:
      return "./img/categories/salads.png";
    case Constants.CATEGORY.DESSERTS:
      return "./img/categories/desserts.png";
    }
}

export function	uuid() {
	var i, random;
	var uuid = '';

	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
			.toString(16);
	}

	return uuid;
}

export function genNameUrl(nameRecipe){
  let listTemp = nameRecipe.split(" ");
  listTemp = listTemp.filter((i)=> i != "");
  return listTemp.join("-");
}
