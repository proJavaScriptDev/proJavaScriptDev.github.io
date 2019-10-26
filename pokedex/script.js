const pokemons = document.querySelector("#pokemon")

const pokemonData = () => {
	const promises = [];
	for (var i = 1; i <= 350; i++) {
		const url = "https://pokeapi.co/api/v2/pokemon/" + i
		promises.push(fetch(url).then(res => res.json()))
	}

	Promise.all(promises).then((results) => {
		const pos = Math.floor(Math.random() * 10);
		const pokemon = results.map((data) => ({
			name: data.name,
			id: data.id,
			image: data.sprites["front_default"],
			type: data.types.map(type => type.type.name).join("-"),
			moves: data.moves[pos] ? data.moves[pos].move.name : data.moves[0].move.name
		}));
		console.log(pokemon)
		displayPokemons(pokemon)
	})
}



const displayPokemons = (pokemon) => {
	// const pokemonCode = pokemon.map(pokeman => `
	// 	<div class="pokemon">
	// 		<img src="${pokeman.image}" />
	// 		<h2>${pokeman.id}.${pokeman.name}</h2>
	// 		<p>Type: ${pokeman.type}</p>
	// 		<p>Move: ${pokeman.moves}</p>
	// 	</div>
	// `).join("");

	// pokemons.innerHTML = pokemonCode;

	pokemons.innerHTML = "";
	const pokemonCode = pokemon.map(pokeman => {
		pokemons.innerHTML += `
	 	<div class="pokemon">
	 		<img src="${pokeman.image}" />
	 		<h2>${pokeman.id}.${pokeman.name}</h2>
	 		<p>Type: ${pokeman.type}</p>
	 		<p>Move: ${pokeman.moves}</p>
		 </div>
		 `;
	});
}


pokemonData()