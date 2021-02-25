const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('idDrink');

async function getDrinks(drinkId) {
	try {
		console.log(drinkId);
		const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + drinkId);
		const jsonResults = await response.json();

		document.title = jsonResults.strDrink;
		document.querySelector('main').innerHTML += `
        <div class="cardTwo">
        <div>
        <h3>${jsonResults.strDrink}</h3>
        <p class="pTxt">instructions: ${jsonResults.strInstructions}</p>
        </div>
        </div>
        `;

	} catch (error) {

	} finally {
	}
}

getDrinks(id);