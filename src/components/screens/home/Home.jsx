import { useEffect, useState } from 'react';
import { CarService } from '../../../services/car.service.js';
import CarItem from './car-item/CarItem.jsx';
import { cars as carsData } from './cars.data.js';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';

const Home = () => {
	const [cars, setCars] = useState(carsData);

	//TODO: useMemo хук позволяет закэшировать изменение, и filteredCars измениться если поменяется условие.
	// const filteredCars = useMemo(() => cars.filter(car => car.price > 10000), []);

	// TODO: аналогично useMemo, useCallback используется для оптимизации, чтобы функция не обновлялась при каждом рендере компонента. useCallback закэширует функцию и будет обновлять её только при изменении зависимости в []
	// const clearCars = useCallback(
	// 	() => () => {
	// 		setCars([]);
	// 	},
	// 	[cars]
	// );

	useEffect(() => {
		const fetchData = async () => {
			const response = await CarService.getAll();
			console.log(response);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Cars catalog</h1>
			{/* Как пропс можно передать функцию, например setCars из useState, для того чтобы обновить state cars */}
			<CreateCarForm setCars={setCars} />
			<div>
				{cars.length ? (
					cars.map(car => <CarItem key={car.id} car={car} />)
				) : (
					<p>There are no cars</p>
				)}
			</div>
		</div>
	);
};

export default Home;
