const getState = ({ getStore, getActions, setStore }) => {
	let APIurl = "https://www.swapi.tech/api/"

	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
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
				fetch(APIurl + 'vehicles')
					.then(response => response.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
