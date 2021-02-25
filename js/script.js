async function getDrinks() {
	try {
		const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
		const jsonResults = await response.json();
		const drinksArray = jsonResults.drinks;
		console.log(drinksArray);

		drinksArray.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">
            <div>
            <img class="bgImg" src="${value.strDrinkThumb}" />
                    <h2>${value.strDrink}</h2>
                    <p>glasstype: ${value.strGlass}</p>
			<p>rating: ${value.strAlcoholic}</p>
                    <a href="cocDetails.html?id=${value.idDrink}">Read More</a>
                </div>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'danger');
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getDrinks();

