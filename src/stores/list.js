const words = [
	{ label: 'здравствуйте', key: 'здравствуйте', score: 4000, selected: false, part: 'adv' },
	{ label: 'добрый вечер', key: 'добрый вечер', score: 3990, selected: false, part: 'adv' },
	{ label: 'доброе утро', key: 'доброе утро', score: 3995, selected: false, part: 'adv' },
	{ label: 'до свидания', key: 'до свидания', score: 3500, selected: false, part: 'adv' },
	{
		label: 'спасибо за ожидание',
		key: 'спасибо за ожидание',
		score: 3400,
		selected: false,
		part: 'f',
	},
	{ label: 'всего доброго', key: 'всего доброго', score: 3400, selected: false, part: 'adv' },
	{ label: 'претензия', key: 'претензия', score: 3000, selected: false, part: 's' },
	{ label: 'сим-карта', key: 'сим-карта', score: 2900, selected: false, part: 's' },
	{ label: 'поменялся номер', key: 'поменялся номер', score: 2700, selected: false, part: 'f' },
	{
		label: 'оставайтесь на линии',
		key: 'оставайтесь на линии',
		score: 2600,
		selected: false,
		part: 'f',
	},
	{ label: 'сказать', key: 'сказать', score: 2396.6, selected: false, part: 'v' },
	{ label: 'время', key: 'время', score: 2015.7, selected: false, part: 's' },
	{ label: 'говорить', key: 'говорить', score: 1755.0, selected: false, part: 'v' },
	{ label: 'знать', key: 'знать', score: 1713.8, selected: false, part: 'v' },
	{ label: 'стать', key: 'стать', score: 1621.8, selected: false, part: 'v' },
	{ label: 'дело', key: 'дело', score: 1412.1, selected: false, part: 's' },
	{ label: 'жизнь', key: 'жизнь', score: 1389.8, selected: false, part: 's' },
	{ label: 'очень', key: 'очень', score: 1286.8, selected: false, part: 'adv' },
	{ label: 'день', key: 'день', score: 1258.4, selected: false, part: 's' },
	{ label: 'новый', key: 'новый', score: 1217.5, selected: false, part: 'a' },
	{ label: 'рука', key: 'рука', score: 1200.6, selected: false, part: 's' },
	{ label: 'работа', key: 'работа', score: 1058.3, selected: false, part: 's' },
	{ label: 'надо', key: 'надо', score: 993.2, selected: false, part: 'adv' },
	{ label: 'хотеть', key: 'хотеть', score: 991.3, selected: false, part: 'v' },
	{ label: 'слово', key: 'слово', score: 967.9, selected: false, part: 's' },
	{ label: 'идти', key: 'идти', score: 957.1, selected: false, part: 'v' },
	{ label: 'большой', key: 'большой', score: 944.4, selected: false, part: 'a' },
	{ label: 'должен', key: 'должен', score: 944.2, selected: false, part: 'a' },
	{ label: 'место', key: 'место', score: 926.6, selected: false, part: 's' },
	{ label: 'иметь', key: 'иметь', score: 906.7, selected: false, part: 'v' },
	{ label: 'лицо', key: 'лицо', score: 878.0, selected: false, part: 's' },
	{ label: 'друг', key: 'друг', score: 874.2, selected: false, part: 's' },
	{ label: 'нет', key: 'нет', score: 874.0, selected: false, part: 'adv' },
	{ label: 'глаз', key: 'глаз', score: 857.6, selected: false, part: 's' },
	{ label: 'тоже', key: 'тоже', score: 841.5, selected: false, part: 'adv' },
	{ label: 'видеть', key: 'видеть', score: 818.2, selected: false, part: 'v' },
	{ label: 'вопрос', key: 'вопрос', score: 805.8, selected: false, part: 's' },
	{ label: 'дом', key: 'дом', score: 792.6, selected: false, part: 's' },
	{ label: 'сторона', key: 'сторона', score: 768.3, selected: false, part: 's' },
	{ label: 'думать', key: 'думать', score: 755.5, selected: false, part: 'v' },
	{ label: 'сделать', key: 'сделать', score: 743.5, selected: false, part: 'v' },
	{ label: 'страна', key: 'страна', score: 725.7, selected: false, part: 's' },
	{ label: 'жить', key: 'жить', score: 725.5, selected: false, part: 'v' },
	{ label: 'мир', key: 'мир', score: 714.7, selected: false, part: 's' },
	{ label: 'последний', key: 'последний', score: 712.6, selected: false, part: 'a' },
	{ label: 'случай', key: 'случай', score: 709.7, selected: false, part: 's' },
	{ label: 'голова', key: 'голова', score: 709.4, selected: false, part: 's' },
	{ label: 'более', key: 'более', score: 706.2, selected: false, part: 'adv' },
	{ label: 'делать', key: 'делать', score: 701.1, selected: false, part: 'v' },
	{ label: 'смотреть', key: 'смотреть', score: 667.2, selected: false, part: 'v' },
	{ label: 'ребенок', key: 'ребенок', score: 658.3, selected: false, part: 's' },
	{ label: 'конечно', key: 'конечно', score: 647.3, selected: false, part: 'adv' },
	{ label: 'сила', key: 'сила', score: 645.8, selected: false, part: 's' },
	{ label: 'российский', key: 'российский', score: 644.6, selected: false, part: 'a' },
	{ label: 'конец', key: 'конец', score: 634.7, selected: false, part: 's' },
	{ label: 'вид', key: 'вид', score: 620.1, selected: false, part: 's' },
	{ label: 'система', key: 'система', score: 617.8, selected: false, part: 's' },
	{ label: 'работать', key: 'работать', score: 611.2, selected: false, part: 'v' },
	{ label: 'понять', key: 'понять', score: 588.2, selected: false, part: 'v' },
	{ label: 'пойти', key: 'пойти', score: 587.2, selected: false, part: 'v' },
	{ label: 'часть', key: 'часть', score: 585.4, selected: false, part: 's' },
	{ label: 'спросить', key: 'спросить', score: 573.9, selected: false, part: 'v' },
	{ label: 'город', key: 'город', score: 573.4, selected: false, part: 's' },
	{ label: 'дать', key: 'дать', score: 573.1, selected: false, part: 'v' },
	{ label: 'также', key: 'также', score: 569.9, selected: false, part: 'adv' },
	{ label: 'понимать', key: 'понимать', score: 559.7, selected: false, part: 'v' },
	{ label: 'получить', key: 'получить', score: 557.7, selected: false, part: 'v' },
	{ label: 'отношение', key: 'отношение', score: 557.4, selected: false, part: 's' },
	{ label: 'сидеть', key: 'сидеть', score: 538.1, selected: false, part: 'v' },
	{ label: 'женщина', key: 'женщина', score: 533.3, selected: false, part: 's' },
	{ label: 'оказаться', key: 'оказаться', score: 531.9, selected: false, part: 'v' },
	{ label: 'русский', key: 'русский', score: 530.5, selected: false, part: 'a' },
	{ label: 'взять', key: 'взять', score: 525.8, selected: false, part: 'v' },
	{ label: 'прийти', key: 'прийти', score: 523.3, selected: false, part: 'v' },
	{ label: 'являться', key: 'являться', score: 522.9, selected: false, part: 'v' },
	{ label: 'деньги', key: 'деньги', score: 512.4, selected: false, part: 's' },
	{ label: 'вдруг', key: 'вдруг', score: 503.2, selected: false, part: 'adv' },
	{ label: 'любить', key: 'любить', score: 503.1, selected: false, part: 'v' },
	{ label: 'стоить', key: 'стоить', score: 501.9, selected: false, part: 'v' },
	{ label: 'почти', key: 'почти', score: 501.7, selected: false, part: 'adv' },
	{ label: 'земля', key: 'земля', score: 494.4, selected: false, part: 's' },
	{ label: 'общий', key: 'общий', score: 492.4, selected: false, part: 'a' },
	{ label: 'машина', key: 'машина', score: 490.4, selected: false, part: 's' },
	{ label: 'сразу', key: 'сразу', score: 486.0, selected: false, part: 'adv' },
	{ label: 'хорошо', key: 'хорошо', score: 485.7, selected: false, part: 'adv' },
	{ label: 'вода', key: 'вода', score: 484.8, selected: false, part: 's' },
	{ label: 'отец', key: 'отец', score: 484.1, selected: false, part: 's' },
	{ label: 'высокий', key: 'высокий', score: 483.3, selected: false, part: 'a' },
	{ label: 'остаться', key: 'остаться', score: 482.7, selected: false, part: 'v' },
	{ label: 'выйти', key: 'выйти', score: 480.9, selected: false, part: 'v' },
	{ label: 'проблема', key: 'проблема', score: 474.9, selected: false, part: 's' },
	{ label: 'начать', key: 'начать', score: 473.3, selected: false, part: 'v' },
	{ label: 'хороший', key: 'хороший', score: 471.4, selected: false, part: 'a' },
	{ label: 'час', key: 'час', score: 468.1, selected: false, part: 's' },
	{ label: 'сегодня', key: 'сегодня', score: 463.5, selected: false, part: 'adv' },
	{ label: 'право', key: 'право', score: 461.4, selected: false, part: 's' },
	{ label: 'совсем', key: 'совсем', score: 460.5, selected: false, part: 'adv' },
	{ label: 'нога', key: 'нога', score: 459.2, selected: false, part: 's' },
	{ label: 'считать', key: 'считать', score: 455.3, selected: false, part: 'v' },
	{ label: 'главный', key: 'главный', score: 454.6, selected: false, part: 'a' },
	{ label: 'решение', key: 'решение', score: 453.4, selected: false, part: 's' },
	{ label: 'увидеть', key: 'увидеть', score: 452.4, selected: false, part: 'v' },
	{ label: 'дверь', key: 'дверь', score: 450.8, selected: false, part: 's' },
	{ label: 'казаться', key: 'казаться', score: 448.2, selected: false, part: 'v' },
	{ label: 'образ', key: 'образ', score: 445.9, selected: false, part: 's' },
	{ label: 'писать', key: 'писать', score: 444.3, selected: false, part: 'v' },
	{ label: 'история', key: 'история', score: 443.9, selected: false, part: 's' },
	{ label: 'лучший', key: 'лучший', score: 443.2, selected: false, part: 'a' },
	{ label: 'власть', key: 'власть', score: 435.6, selected: false, part: 's' },
	{ label: 'закон', key: 'закон', score: 433.4, selected: false, part: 's' },
	{ label: 'война', key: 'война', score: 425.9, selected: false, part: 's' },
	{ label: 'бог', key: 'бог', score: 425.4, selected: false, part: 's' },
	{ label: 'голос', key: 'голос', score: 424.5, selected: false, part: 's' },
	{ label: 'найти', key: 'найти', score: 424.1, selected: false, part: 'v' },
	// { key: 'стоять', score: 419.3, selected: false, part: 'v' },
	// { key: 'вообще', score: 417.6, selected: false, part: 'adv' },
	// { key: 'тысяча', score: 416.0, selected: false, part: 's' },
	// { key: 'больше', score: 415.3, selected: false, part: 'adv' },
	// { key: 'вместе', score: 414.3, selected: false, part: 'adv' },
	// { key: 'маленький', score: 414.1, selected: false, part: 'a' },
	// { key: 'книга', score: 413.9, selected: false, part: 's' },
	// { key: 'решить', score: 409.7, selected: false, part: 'v' },
	// { key: 'возможность', score: 407.5, selected: false, part: 's' },
	// { key: 'результат', score: 403.1, selected: false, part: 's' },
	// { key: 'ночь', score: 402.8, selected: false, part: 's' },
	// { key: 'стол', score: 402.5, selected: false, part: 's' },
	// { key: 'область', score: 400.2, selected: false, part: 's' },
	// { key: 'молодой', score: 400.0, selected: false, part: 'a' },
	// { key: 'пройти', score: 398.4, selected: false, part: 'v' },
	// { key: 'например', score: 398.0, selected: false, part: 'adv' },
	// { key: 'статья', score: 395.0, selected: false, part: 's' },
	// { key: 'число', score: 393.5, selected: false, part: 's' },
	// { key: 'компания', score: 392.7, selected: false, part: 's' },
	// { key: 'государственный', score: 391.3, selected: false, part: 'a' },
	// { key: 'полный', score: 390.6, selected: false, part: 'a' },
	// { key: 'принять', score: 386.9, selected: false, part: 'v' },
	// { key: 'народ', score: 385.6, selected: false, part: 's' },
	// { key: 'советский', score: 382.9, selected: false, part: 'a' },
	// { key: 'жена', score: 376.8, selected: false, part: 's' },
	// { key: 'настоящий', score: 374.0, selected: false, part: 'a' },
	// { key: 'группа', score: 372.8, selected: false, part: 's' },
	// { key: 'развитие', score: 372.6, selected: false, part: 's' },
	// { key: 'процесс', score: 371.7, selected: false, part: 's' },
	// { key: 'суд', score: 371.1, selected: false, part: 's' },
	// { key: 'давать', score: 370.7, selected: false, part: 'v' },
	// { key: 'ответить', score: 370.4, selected: false, part: 'v' },
	// { key: 'старый', score: 368.5, selected: false, part: 'a' },
	// { key: 'условие', score: 368.1, selected: false, part: 's' },
	// { key: 'средство', score: 363.9, selected: false, part: 's' },
	// { key: 'помнить', score: 363.1, selected: false, part: 'v' },
	// { key: 'начало', score: 361.4, selected: false, part: 's' },
	// { key: 'ждать', score: 360.2, selected: false, part: 'v' },
	// { key: 'свет', score: 359.7, selected: false, part: 's' },
	// { key: 'пора', score: 358.2, selected: false, part: 's' },
	// { key: 'путь', score: 357.3, selected: false, part: 's' },
	// { key: 'душа', score: 356.8, selected: false, part: 's' },
	// { key: 'нужно', score: 353.7, selected: false, part: 'adv' },
	// { key: 'разный', score: 352.6, selected: false, part: 'a' },
	// { key: 'нужный', score: 351.9, selected: false, part: 'a' },
	// { key: 'уровень', score: 348.5, selected: false, part: 's' },
	// { key: 'форма', score: 347.8, selected: false, part: 's' },
	// { key: 'связь', score: 346.1, selected: false, part: 's' },
	// { key: 'минута', score: 344.2, selected: false, part: 's' },
	// { key: 'находиться', score: 342.7, selected: false, part: 'v' },
	// { key: 'опять', score: 342.2, selected: false, part: 'adv' },
	// { key: 'белый', score: 339.6, selected: false, part: 'a' },
	// { key: 'собственный', score: 338.3, selected: false, part: 'a' },
	// { key: 'улица', score: 337.8, selected: false, part: 's' },
	// { key: 'черный', score: 337.5, selected: false, part: 'a' },
	// { key: 'написать', score: 336.2, selected: false, part: 'v' },
	// { key: 'вечер', score: 335.4, selected: false, part: 's' },
	// { key: 'снова', score: 334.4, selected: false, part: 'adv' },
	// { key: 'основной', score: 334.1, selected: false, part: 'a' },
	// { key: 'качество', score: 331.7, selected: false, part: 's' },
	// { key: 'мысль', score: 331.6, selected: false, part: 's' },
	// { key: 'дорога', score: 330.1, selected: false, part: 's' },
	// { key: 'мать', score: 330.1, selected: false, part: 's' },
	// { key: 'действие', score: 329.3, selected: false, part: 's' },
	// { key: 'месяц', score: 328.0, selected: false, part: 's' },
	// { key: 'оставаться', score: 327.4, selected: false, part: 'v' },
	// { key: 'государство', score: 326.4, selected: false, part: 's' },
	// { key: 'язык', score: 324.9, selected: false, part: 's' },
	// { key: 'любовь', score: 323.9, selected: false, part: 's' },
	// { key: 'взгляд', score: 323.8, selected: false, part: 's' },
	// { key: 'мама', score: 322.6, selected: false, part: 's' },
	// { key: 'играть', score: 319.1, selected: false, part: 'v' },
	// { key: 'далекий', score: 318.3, selected: false, part: 'a' },
	// { key: 'лежать', score: 318.1, selected: false, part: 'v' },
	// { key: 'нельзя', score: 317.7, selected: false, part: 'adv' },
	// { key: 'век', score: 317.4, selected: false, part: 's' },
	// { key: 'школа', score: 316.0, selected: false, part: 's' },
	// { key: 'подумать', score: 315.6, selected: false, part: 'v' },
	// { key: 'уйти', score: 315.6, selected: false, part: 'v' },
	// { key: 'цель', score: 315.5, selected: false, part: 's' },
	// { key: 'общество', score: 314.7, selected: false, part: 's' },
	// { key: 'посмотреть', score: 314.2, selected: false, part: 'v' },
	// { key: 'деятельность', score: 313.5, selected: false, part: 's' },
	// { key: 'организация', score: 312.4, selected: false, part: 's' },
	// { key: 'вернуться', score: 311.2, selected: false, part: 'v' },
	// { key: 'президент', score: 311.0, selected: false, part: 's' },
	// { key: 'комната', score: 310.7, selected: false, part: 's' },
	// { key: 'порядок', score: 307.6, selected: false, part: 's' },
	// { key: 'момент', score: 306.8, selected: false, part: 's' },
	// { key: 'театр', score: 305.3, selected: false, part: 's' },
	// { key: 'следовать', score: 305.1, selected: false, part: 'v' },
	// { key: 'читать', score: 304.4, selected: false, part: 'v' },
	// { key: 'письмо', score: 304.3, selected: false, part: 's' },
	// { key: 'подобный', score: 301.6, selected: false, part: 'a' },
	// { key: 'следующий', score: 301.4, selected: false, part: 'a' },
	// { key: 'утро', score: 301.3, selected: false, part: 's' },
	// { key: 'особенно', score: 300.3, selected: false, part: 'adv' },
	// { key: 'помощь', score: 300.1, selected: false, part: 's' },
	// { key: 'ситуация', score: 298.8, selected: false, part: 's' },
	// { key: 'роль', score: 297.9, selected: false, part: 's' },
	// { key: 'бывать', score: 297.3, selected: false, part: 'v' },
	// { key: 'ходить', score: 296.6, selected: false, part: 'v' },
	// { key: 'рубль', score: 296.4, selected: false, part: 's' },
	// { key: 'начинать', score: 296.0, selected: false, part: 'v' },
	// { key: 'появиться', score: 294.6, selected: false, part: 'v' },
	// { key: 'смысл', score: 294.6, selected: false, part: 's' },
	// { key: 'состояние', score: 294.4, selected: false, part: 's' },
	// { key: 'называть', score: 293.4, selected: false, part: 'v' },
	// { key: 'рядом', score: 291.8, selected: false, part: 'adv' },
	// { key: 'квартира', score: 290.9, selected: false, part: 's' },
	// { key: 'назад', score: 290.7, selected: false, part: 'adv' },
	// { key: 'равный', score: 289.7, selected: false, part: 'a' },
	// { key: 'орган', score: 288.4, selected: false, part: 's' },
	// { key: 'внимание', score: 286.0, selected: false, part: 's' },
	// { key: 'тело', score: 285.9, selected: false, part: 's' },
	// { key: 'труд', score: 285.9, selected: false, part: 's' },
	// { key: 'прийтись', score: 285.5, selected: false, part: 'v' },
	// { key: 'хотеться', score: 285.3, selected: false, part: 'v' },
	// { key: 'сын', score: 285.1, selected: false, part: 's' },
	// { key: 'мера', score: 284.3, selected: false, part: 's' },
	// { key: 'смерть', score: 284.1, selected: false, part: 's' },
	// { key: 'живой', score: 284.0, selected: false, part: 'a' },
	// { key: 'рынок', score: 283.3, selected: false, part: 's' },
	// { key: 'программа', score: 282.6, selected: false, part: 's' },
	// { key: 'задача', score: 282.4, selected: false, part: 's' },
	// { key: 'предприятие', score: 281.6, selected: false, part: 's' },
	// { key: 'известный', score: 281.1, selected: false, part: 'a' },
	// { key: 'окно', score: 280.8, selected: false, part: 's' },
	// { key: 'вести', score: 280.3, selected: false, part: 'v' },
	// { key: 'совершенно', score: 280.3, selected: false, part: 'adv' },
	// { key: 'военный', score: 278.7, selected: false, part: 'a' },
	// { key: 'разговор', score: 278.3, selected: false, part: 's' },
	// { key: 'показать', score: 277.7, selected: false, part: 'v' },
	// { key: 'правительство', score: 277.7, selected: false, part: 's' },
	// { key: 'важный', score: 277.0, selected: false, part: 'a' },
	// { key: 'семья', score: 276.6, selected: false, part: 's' },
	// { key: 'великий', score: 276.3, selected: false, part: 'a' },
	// { key: 'производство', score: 275.6, selected: false, part: 's' },
	// { key: 'простой', score: 275.3, selected: false, part: 'a' },
	// { key: 'значит', score: 274.9, selected: false, part: 'adv' },
	// { key: 'огромный', score: 272.1, selected: false, part: 'a' },
	// { key: 'давно', score: 272.0, selected: false, part: 'adv' },
	// { key: 'политический', score: 269.6, selected: false, part: 'a' },
	// { key: 'информация', score: 269.2, selected: false, part: 's' },
	// { key: 'действительно', score: 268.6, selected: false, part: 'adv' },
	// { key: 'положение', score: 268.2, selected: false, part: 's' },
	// { key: 'поставить', score: 267.3, selected: false, part: 'v' },
	// { key: 'бояться', score: 266.5, selected: false, part: 'v' },
	// { key: 'наконец', score: 265.9, selected: false, part: 'adv' },
	// { key: 'центр', score: 265.9, selected: false, part: 's' },
	// { key: 'происходить', score: 263.6, selected: false, part: 'v' },
	// { key: 'ответ', score: 263.3, selected: false, part: 's' },
	// { key: 'муж', score: 263.0, selected: false, part: 's' },
	// { key: 'автор', score: 262.1, selected: false, part: 's' },
	// { key: 'стена', score: 261.0, selected: false, part: 's' },
	// { key: 'существовать', score: 260.9, selected: false, part: 'v' },
	// { key: 'интерес', score: 260.6, selected: false, part: 's' },
	// { key: 'становиться', score: 259.3, selected: false, part: 'v' },
	// { key: 'федерация', score: 258.9, selected: false, part: 's' },
	// { key: 'правило', score: 258.8, selected: false, part: 's' },
	// { key: 'часто', score: 257.8, selected: false, part: 'adv' },
	// { key: 'московский', score: 257.3, selected: false, part: 'a' },
	// { key: 'управление', score: 256.5, selected: false, part: 's' },
	// { key: 'слышать', score: 256.1, selected: false, part: 'v' },
	// { key: 'быстро', score: 255.7, selected: false, part: 'adv' },
	// { key: 'смочь', score: 255.1, selected: false, part: 'v' },
	// { key: 'заметить', score: 253.9, selected: false, part: 'v' },
	// { key: 'мужчина', score: 253.2, selected: false, part: 's' },
	// { key: 'долго', score: 253.1, selected: false, part: 'adv' },
	// { key: 'правда', score: 252.4, selected: false, part: 'adv' },
	// { key: 'идея', score: 250.8, selected: false, part: 's' },
	// { key: 'партия', score: 250.4, selected: false, part: 's' },
	// { key: 'иногда', score: 249.8, selected: false, part: 'adv' },
	// { key: 'использовать', score: 249.6, selected: false, part: 'v' },
	// { key: 'пытаться', score: 249.4, selected: false, part: 'v' },
	// { key: 'готовый', score: 248.5, selected: false, part: 'a' },
	// { key: 'чуть', score: 248.3, selected: false, part: 'adv' },
	// { key: 'представить', score: 247.2, selected: false, part: 'v' },
	// { key: 'чувствовать', score: 246.9, selected: false, part: 'v' },
	// { key: 'создать', score: 245.9, selected: false, part: 'v' },
	// { key: 'совет', score: 245.5, selected: false, part: 's' },
	// { key: 'счет', score: 245.4, selected: false, part: 's' },
	// { key: 'сердце', score: 245.1, selected: false, part: 's' },
	// { key: 'движение', score: 244.7, selected: false, part: 's' },
	// { key: 'вещь', score: 242.5, selected: false, part: 's' },
	// { key: 'материал', score: 242.4, selected: false, part: 's' },
	// { key: 'неделя', score: 242.2, selected: false, part: 's' },
	// { key: 'чувство', score: 242.2, selected: false, part: 's' },
	// { key: 'затем', score: 241.3, selected: false, part: 'adv' },
	// { key: 'заниматься', score: 240.8, selected: false, part: 'v' },
]

const vocabs = [
	{ name: 'Приветствие', keys: ['здравствуйте', 'добрый вечер', 'доброе утро'], selected: false },
	{ name: 'Прощание', keys: ['до свидания', 'всего доброго'], selected: false },
]

export { words, vocabs }
