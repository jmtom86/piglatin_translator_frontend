// const API_BASE_ADDRESS = 'https://thawing-tundra-47064.herokuapp.com';
const API_BASE_ADDRESS = process.env.API_ADDRESS;

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