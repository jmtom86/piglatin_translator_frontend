// const API_BASE_ADDRESS = 'http://localhost:3000';
const API_BASE_ADDRESS = process.env.REACT_APP_API_ADDRESS;

export default class PigLatinApi {

	static translate(words) {
		const uri = API_BASE_ADDRESS + "/piglatin";
		return fetch(uri, {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(words)
		})
	}
}