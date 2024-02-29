import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CarItem from '../home/car-item/CarItem.jsx';
import { cars as carsData } from '../home/cars.data.js';
import styles from './CarDetail.module.css';

const CarDetail = () => {
	// с помощью хука useParams можно получить id из параметра ссылки
	const { id } = useParams();
	const [car, setCar] = useState({});

	useEffect(() => {
		const getData = () => {
			const data = carsData.find(car => car.id == id);

			setCar(data);
		};

		getData();
	}, [id]);

	if (!car?.name) return <p>Loading...</p>;

	return (
		<div>
			<h1>{car.name}</h1>
			<Link className={styles.back} to='/'>
				Back
			</Link>
			<CarItem car={car} />
		</div>
	);
};

export default CarDetail;
