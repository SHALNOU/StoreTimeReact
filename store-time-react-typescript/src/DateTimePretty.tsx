import React from 'react';
import moment from 'moment';

interface DateTimePrettyProps {
	date: string;
}

const DateTimePretty: React.FC<DateTimePrettyProps> = ({ date }) => {
	const formattedDate = () => {
		const currentDate = moment();
		const postDate = moment(date);
		const diffInMinutes = currentDate.diff(postDate, 'minutes');
		const diffInHours = currentDate.diff(postDate, 'hours');
		const diffInDays = currentDate.diff(postDate, 'days');

		if (diffInMinutes < 60) {
			return `${diffInMinutes} минут назад`;
		} else if (diffInHours < 24) {
			return `${diffInHours} часов назад`;
		} else {
			return `${diffInDays} дней назад`;
		}
	};

	return <span>{formattedDate()}</span>; // Вставляем результат внутрь тега <span>
};

export default DateTimePretty;
