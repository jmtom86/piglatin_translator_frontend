const API_BASE_ADDRESS = 'http://localhost:3000';

export default class PigLatinApi {

	static translate(words) {
		const uri = API_BASE_ADDRESS + "/piglatin";
		console.log(words);
		return fetch(uri, {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(words)
		})
	}
}