/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './CreateCarForm.module.css';

const clearData = {
	price: '',
	name: '',
	image: '',
};

const CreateCarForm = ({ setCars }) => {
	//TODO: для обработки формы лучше использовать один useState в виде объекта
	const [data, setData] = useState(clearData);

	//TODO: обработку инпутов, state и т.д. принято называть handle (обработчик)
	const createCar = e => {
		e.preventDefault();
		// у set useState хука есть prev, это предыдущее состояние
		setCars(prev => [{ id: prev.length + 1, ...data }, ...prev]);

		setData(clearData);
	};

	return (
		<form className={styles.form}>
			<input
				placeholder='Name'
				type='text'
				onChange={e =>
					setData(prev => ({
						...prev,
						name: e.target.value,
					}))
				}
				value={data.name}
			/>
			<input
				placeholder='Price'
				type='text'
				onChange={e =>
					setData(prev => ({
						...prev,
						price: e.target.value,
					}))
				}
				value={data.price}
			/>
			<input
				placeholder='Image'
				type='text'
				onChange={e =>
					setData(prev => ({
						...prev,
						image: e.target.value,
					}))
				}
				value={data.image}
			/>
			<button className='btn' onClick={e => createCar(e)}>
				Create
			</button>
		</form>
	);
};

export default CreateCarForm;
