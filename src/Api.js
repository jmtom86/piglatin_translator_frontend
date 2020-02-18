const API_BASE_ADDRESS = 'https://thawing-tundra-47064.herokuapp.com';

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