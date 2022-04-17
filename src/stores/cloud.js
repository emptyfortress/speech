const words = [
	{ key: 'аккаунт моей', value: 2 },
	{ key: 'баба', value: 7 },
	{ key: 'без проблем', value: 7 },
	{ key: 'благодарю за ожидание', value: 1 },
	{ key: 'блокировка', value: 2 },
	{ key: 'буквально', value: 9 },
	{ key: 'быдло', value: 7 },
	{ key: 'быдло', value: 4 },
	{ key: 'в натуре', value: 1 },
	{ key: 'в некотором роде', value: 3 },
	{ key: 'в общем', value: 2 },
	{ key: 'в принципе', value: 1 },
	{ key: 'в самом деле', value: 3 },
	{ key: 'верификация', value: 1 },
	{ key: 'видишь', value: 7 },
	{ key: 'вообще', value: 1 },
	{ key: 'все такое', value: 3 },
	{ key: 'всего доброго', value: 11 },
	{ key: 'да ладно', value: 6 },
	{ key: 'дата рождения', value: 4 },
	{ key: 'деньги', value: 3 },
	{ key: 'до свидания', value: 2 },
	{ key: 'доброе утро', value: 5 },
	{ key: 'добрый вечер', value: 7 },
	{ key: 'добрый день', value: 2 },
	{ key: 'жалоба', value: 4 },
	{ key: 'зарегистрировался', value: 2 },
	{ key: 'здравствуйте', value: 16 },
	{ key: 'идентификация', value: 6 },
	{ key: 'изменился номер', value: 3 },
	{ key: 'изменить', value: 7 },
	{ key: 'как говорится', value: 1 },
	{ key: 'как его', value: 2 },
	{ key: 'как же так', value: 1 },
	{ key: 'как сказать', value: 4 },
	{ key: 'как-то так', value: 2 },
	{ key: 'когда ответите', value: 7 },
	{ key: 'когда рассмотрите', value: 7 },
	{ key: 'конкретно', value: 1 },
	{ key: 'короче', value: 8 },
	{ key: 'косяк', value: 2 },
	{ key: 'кретин', value: 4 },
	{ key: 'курва', value: 9 },
	{ key: 'личность', value: 7 },
	{ key: 'личный кабинет моей', value: 4 },
	{ key: 'мент', value: 1 },
	{ key: 'меня зовут', value: 6 },
	{ key: 'могу ещё помочь', value: 2 },
	{ key: 'на линии', value: 4 },
	{ key: 'на самом деле', value: 3 },
	{ key: 'написал вам', value: 4 },
	{ key: 'нахер', value: 1 },
	{ key: 'не вопрос', value: 7 },
	{ key: 'не мой аккаунт', value: 1 },
	{ key: 'не мой личный кабинет', value: 4 },
	{ key: 'ничего себе', value: 3 },
	{ key: 'номер паспорта', value: 3 },
	{ key: 'ну вот', value: 4 },
	{ key: 'облом', value: 2 },
	{ key: 'обломить', value: 2 },
	{ key: 'обращаться', value: 6 },
	{ key: 'ограничение', value: 4 },
	{ key: 'одну минуту', value: 3 },
	{ key: 'оператор', value: 2 },
	{ key: 'оставайтесь', value: 5 },
	{ key: 'оставайтесь на линии', value: 7 },
	{ key: 'оставил заявку', value: 2 },
	{ key: 'оставил обращение', value: 4 },
	{ key: 'оставлял заявку', value: 2 },
	{ key: 'оставлял обращение', value: 1 },
	{ key: 'отправил данные', value: 6 },
	{ key: 'отправил заявку', value: 3 },
	{ key: 'отправил обращение', value: 7 },
	{ key: 'отправлял обращение', value: 1 },
	{ key: 'очень приятно', value: 2 },
	{ key: 'паспортные данные', value: 1 },
	{ key: 'перевод', value: 4 },
	{ key: 'пожалуйста', value: 2 },
	{ key: 'поменялся номер', value: 7 },
	{ key: 'потерял сим-карту', value: 8 },
	{ key: 'потерял телефон', value: 2 },
	{ key: 'потерялся номер', value: 4 },
	{ key: 'правоохранительный', value: 7 },
	{ key: 'претензия', value: 9 },
	{ key: 'привет', value: 1 },
	{ key: 'придурок', value: 3 },
	{ key: 'проблема', value: 2 },
	{ key: 'прокуратура', value: 1 },
	{ key: 'разводить', value: 3 },
	{ key: 'регистрация', value: 4 },
	{ key: 'сейчас уточню', value: 1 },
	{ key: 'серия', value: 7 },
	{ key: 'смена номера', value: 1 },
	{ key: 'сменить', value: 4 },
	{ key: 'смотрите', value: 3 },
	{ key: 'собственно', value: 3 },
	{ key: 'спасибо за обращение', value: 4, color: true },
	{ key: 'спасибо за ожидание', value: 12, color: true },
	{ key: 'срака', value: 2 },
	{ key: 'сраный', value: 6 },
	{ key: 'срач', value: 4 },
	{ key: 'срок', value: 3 },
	{ key: 'сроки рассмотрения', value: 2 },
	{ key: 'суд', value: 5 },
	{ key: 'так сказать', value: 7 },
]

const words1 = [
	{ key: 'продажи', value: 5 },
	{ key: 'цена', value: 5 },
	{ key: 'бунт', value: 5 },
	{ key: 'арматура', value: 5 },
	{ key: 'прокат', value: 5 },
	{ key: 'договор', value: 5 },
	{ key: 'скидка', value: 5 },
	{ key: 'клиент', value: 5 },
]

const randomArray = (length, { min, max }) => {
	let result = []
	for (let i = 0; i < length; i++) {
		let random = Math.floor(Math.random() * (max - min + 1) + min)
		let obj = {
			x: i + 10 + ':00',
			y: random,
		}
		result.push(obj)
	}
	return result
}

const heatSeries = [
	{
		name: 'Воскресенье',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Суббота',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Пятница',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Четверг',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Среда',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Вторник',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Понедельник',
		data: randomArray(12, {
			min: 0,
			max: 90,
		}),
	},
]

export { words, words1, heatSeries }
