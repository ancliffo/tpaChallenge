import axios from "axios";

const getCnProvinces = async () => {
	return fetch('http://localhost:3000/data/cnProvinces.json')
		.then(response => {
			if (!response.ok) {
				console.error("HTTP error " + response.status);
			}

			return response.json();
		})
		.then((data) => {
			if (data) {
				return data
			} else {
				return null;
			}
		});
};

const getLocations = async () => {
	return fetch('http://localhost:3000/data/locations.json')
		.then(response => {
			if (!response.ok) {
				console.error("HTTP error " + response.status);
			}

			return response.json();
		})
		.then((data) => {
			if (data) {
				return data
			} else {
				return null;
			}
		});
};

const getMxStates = async () => {
	return fetch('http://localhost:3000/data/mxStates.json')
		.then(response => {
			if (!response.ok) {
				console.error("HTTP error " + response.status);
			}

			return response.json();
		})
		.then((data) => {
			if (data) {
				return data
			} else {
				return null;
			}
		});
};

const getUsStates = async () => {
	return fetch('http://localhost:3000/data/usStates.json')
		.then(response => {
			if (!response.ok) {
				console.error("HTTP error " + response.status);
			}

			return response.json();
		})
		.then((data) => {
			if (data) {
				return data
			} else {
				return null;
			}
		});
};

const getClientCountry = async ()=> {
	return fetch('https://api.ipregistry.co/?key=1naubtykw9lne01a')
		.then(function (response) {
			return response.json();
		})
		.then(function (payload) {
			return payload.location.country.name;
		});
};

export default {
	getCnProvinces,
	getMxStates,
	getUsStates,
	getLocations,
	getClientCountry
};
