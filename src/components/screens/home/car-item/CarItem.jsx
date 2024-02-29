/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home.module.css';
import Price from './Price';

// параметр функции - деструктуризированный пропс
const CarItem = ({ car }) => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.item}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${car.image})`,
				}}
			/>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<button onClick={() => setCount(prev => prev + 1)}>click</button>
				<Price price={car.price} />
				<Link className='btn' to={`/car/${car.id}`}>
					Read more
				</Link>
			</div>
		</div>
	);
};

export default CarItem;
