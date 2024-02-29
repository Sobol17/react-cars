import React from 'react';

const Price = ({ price }) => {
	console.log('Price render');
	return (
		<p>
			{new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'USD',
			}).format(price)}
		</p>
	);
};
// React.memo позволяет убрать лишние рендеры компонента, компонент будет обновлятся только после того, как изменится пропс. Имба для оптимизации
export default React.memo(Price);
