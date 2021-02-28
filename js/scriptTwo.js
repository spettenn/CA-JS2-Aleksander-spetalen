const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
async function getDrinks() {
console.log()

try {
const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
const jsonResults = await response.json();
const value = jsonResults.drinks[0];

document.title = jsonResults.strDrink;
document.querySelector('main').innerHTML += `
<div class="cardTwo">
<img class="bgImgTwo" src="${value.strDrinkThumb}" />
<div class="cardThree">
<h3>${value.strDrink}</h3>
<p>Instructions: ${value.strInstructions}</p>
<p>Ingrediants:</p>
<p>${value.strIngredient1}</p>
<p>${value.strIngredient2}</p>
<p>${value.strIngredient3}</p>
<p>${value.strIngredient4}</p>
<p>${value.strIngredient5}</p>
<p>${value.strIngredient6}</p>
<p>${value.strIngredient7}</p>

</div>
</div>
`;
} catch (error) {
} finally {
}
}
getDrinks(id);
