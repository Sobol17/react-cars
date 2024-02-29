import axios from 'axios';

// Пример асинхронного запроса на сервер
export const CarService = {
	async getAll() {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		return response.data;
	},
	async getById(id) {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users?id=${id}`
		);
		const data = response.data;

		return data;
	},
};
