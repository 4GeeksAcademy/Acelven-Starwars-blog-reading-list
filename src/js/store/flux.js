const getState = ({ getStore, getActions, setStore }) => {
	let APIurl = "https://www.swapi.tech/api/"

	return {
		store: {
			people: [],
			planets: [],
			species: [],
			person: {},
			planet: {},
			speciesSingle: {},
			favorites: []
		},
		actions: {
			getData: () => {
				fetch(APIurl + 'people')
					.then(response => response.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.error(error));
				fetch(APIurl + 'planets')
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.error(error));
				fetch(APIurl + 'species')
					.then(response => response.json())
					.then(data => setStore({ species: data.results }))
					.catch(error => console.error(error));


			},

			loadDetails: async (id) => {
				const resp = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await resp.json()
				// console.log(data.result)
				setStore({ person: data.result.properties });

				const planetResp = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const planetData = await planetResp.json()

				setStore({ planet: planetData.result.properties })

				const speciesResp = await fetch(`https://www.swapi.tech/api/species/${id}`)
				const speciesData = await speciesResp.json()

				setStore({ speciesSingle: speciesData.result.properties })

			},

			setFavorites: data => {
				const store = getStore();
				console.log([...store.favorites, data])
				setStore({ favorites: [...store.favorites, data] });


			}


		}
	}
};

export default getState;
