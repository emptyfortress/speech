const lib = [
	{ key: 'ага', selected: true, value: 0 },
	{ key: 'аккаунт моей', selected: false, value: 0 },
	{ key: 'ахуеть', selected: false, value: 0 },
	{ key: 'ахуй', selected: false, value: 0 },
	{ key: 'баба', selected: false, value: 0 },
	{ key: 'башка', selected: false, value: 0 },
	{ key: 'без проблем', selected: false, value: 0 },
	{ key: 'бздеть', selected: false, value: 0 },
	{ key: 'бздун', selected: false, value: 0 },
	{ key: 'благодарю за ожидание', selected: false, value: 0 },
	{ key: 'блин', selected: false, value: 0 },
	{ key: 'блокировка', selected: false, value: 0 },
	{ key: 'бля', selected: false, value: 0 },
	{ key: 'блядина', selected: false, value: 0 },
	{ key: 'блядун', selected: false, value: 0 },
	{ key: 'блядь', selected: false, value: 0 },
	{ key: 'блять', selected: false, value: 0 },
	{ key: 'бляха-муха', selected: false, value: 0 },
	{ key: 'болван', selected: false, value: 0 },
	{ key: 'буквально', selected: false, value: 0 },
	{ key: 'быдло', selected: false, value: 0 },
	{ key: 'быдло', selected: false, value: 0 },
	{ key: 'в натуре', selected: false, value: 0 },
	{ key: 'в некотором роде', selected: false, value: 0 },
	{ key: 'в общем', selected: false, value: 0 },
	{ key: 'в принципе', selected: false, value: 0 },
	{ key: 'в самом деле', selected: false, value: 0 },
	{ key: 'ведь', selected: false, value: 0 },
	{ key: 'верификация', selected: false, value: 0 },
	{ key: 'вздрючить', selected: false, value: 0 },
	{ key: 'видишь', selected: false, value: 0 },
	{ key: 'вообще', selected: false, value: 0 },
	{ key: 'вот', selected: false, value: 0 },
	{ key: 'все такое', selected: false, value: 0 },
	{ key: 'всего доброго', selected: false, value: 0 },
	{ key: 'всраться', selected: false, value: 0 },
	{ key: 'вхуярить', selected: false, value: 0 },
	{ key: 'въебать', selected: false, value: 0 },
	{ key: 'выводил', selected: false, value: 0 },
	{ key: 'выёбываться', selected: false, value: 0 },
	{ key: 'гандон', selected: false, value: 0 },
	{ key: 'говно', selected: false, value: 0 },
	{ key: 'говнюк', selected: false, value: 0 },
	{ key: 'гомик', selected: false, value: 0 },
	{ key: 'гомосек', selected: false, value: 0 },
	{ key: 'гомосятина', selected: false, value: 0 },
	{ key: 'гондон', selected: false, value: 0 },
	{ key: 'да ладно', selected: false, value: 0 },
	{ key: 'дата рождения', selected: false, value: 0 },
	{ key: 'деньги', selected: false, value: 0 },
	{ key: 'дерьмо', selected: false, value: 0 },
	{ key: 'до свидания', selected: false, value: 0 },
	{ key: 'доброе утро', selected: false, value: 0 },
	{ key: 'добрый вечер', selected: false, value: 0 },
	{ key: 'добрый день', selected: false, value: 0 },
	{ key: 'доебаться', selected: false, value: 0 },
	{ key: 'долбоёб', selected: false, value: 0 },
	{ key: 'дохуя', selected: false, value: 0 },
	{ key: 'дурак', selected: false, value: 0 },
	{ key: 'дятел', selected: false, value: 0 },
	{ key: 'ебало', selected: false, value: 0 },
	{ key: 'ёбанный', selected: false, value: 0 },
	{ key: 'ебанутый', selected: false, value: 0 },
	{ key: 'ебанько', selected: false, value: 0 },
	{ key: 'ебать', selected: false, value: 0 },
	{ key: 'ебланить', selected: false, value: 0 },
	{ key: 'ебучий', selected: false, value: 0 },
	{ key: 'единый цупис', selected: false, value: 0 },
	{ key: 'жалоба', selected: false, value: 0 },
	{ key: 'жлоб', selected: false, value: 0 },
	{ key: 'жопа', selected: false, value: 0 },
	{ key: 'задница', selected: false, value: 0 },
	{ key: 'задолбать', selected: false, value: 0 },
	{ key: 'задрот', selected: false, value: 0 },
	{ key: 'заебать', selected: false, value: 0 },
	{ key: 'заебаться', selected: false, value: 0 },
	{ key: 'залупа', selected: false, value: 0 },
	{ key: 'зарегистрировался', selected: false, value: 0 },
	{ key: 'заткнуться', selected: false, value: 0 },
	{ key: 'здравствуйте', selected: false, value: 0 },
	{ key: 'зырить', selected: false, value: 0 },
	{ key: 'идентификация', selected: false, value: 0 },
	{ key: 'идиот', selected: false, value: 0 },
	{ key: 'изменился номер', selected: false, value: 0 },
	{ key: 'изменить', selected: false, value: 0 },
	{ key: 'как говорится', selected: false, value: 0 },
	{ key: 'как его', selected: false, value: 0 },
	{ key: 'ак же так', selected: false, value: 0 },
	{ key: 'как сказать', selected: false, value: 0 },
	{ key: 'как-то так', selected: false, value: 0 },
	{ key: 'капец', selected: false, value: 0 },
	{ key: 'кидалово', selected: false, value: 0 },
	{ key: 'когда ответите', selected: false, value: 0 },
	{ key: 'когда рассмотрите', selected: false, value: 0 },
	{ key: 'козел', selected: false, value: 0 },
	{ key: 'конкретно', selected: false, value: 0 },
	{ key: 'короче', selected: false, value: 0 },
	{ key: 'косяк', selected: false, value: 0 },
	{ key: 'кретин', selected: false, value: 0 },
	{ key: 'курва', selected: false, value: 0 },
	{ key: 'лавэ', selected: false, value: 0 },
	{ key: 'лахудра', selected: false, value: 0 },
	{ key: 'личность', selected: false, value: 0 },
	{ key: 'личный кабинет моей', selected: false, value: 0 },
	{ key: 'лох', selected: false, value: 0 },
	{ key: 'лохануться', selected: false, value: 0 },
	{ key: 'лохотрон', selected: false, value: 0 },
	{ key: 'лошара', selected: false, value: 0 },
	{ key: 'лярва', selected: false, value: 0 },
	{ key: 'манда', selected: false, value: 0 },
	{ key: 'матюгальник', selected: false, value: 0 },
	{ key: 'мент', selected: false, value: 0 },
	{ key: 'меня зовут', selected: false, value: 0 },
	{ key: 'могу ещё помочь', selected: false, value: 0 },
	{ key: 'мозгоёб', selected: false, value: 0 },
	{ key: 'мразь', selected: false, value: 0 },
	{ key: 'мудак', selected: false, value: 0 },
	{ key: 'мудозвон', selected: false, value: 0 },
	{ key: 'на линии', selected: false, value: 0 },
	{ key: 'на самом деле', selected: false, value: 0 },
	{ key: 'наебалово', selected: false, value: 0 },
	{ key: 'наебать', selected: false, value: 0 },
	{ key: 'написал вам', selected: false, value: 0 },
	{ key: 'насрать', selected: false, value: 0 },
	{ key: 'нафиг', selected: false, value: 0 },
	{ key: 'нахер', selected: false, value: 0 },
	{ key: 'нахуй', selected: false, value: 0 },
	{ key: 'нахуя', selected: false, value: 0 },
	{ key: 'не вопрос', selected: false, value: 0 },
	{ key: 'не мой аккаунт', selected: false, value: 0 },
	{ key: 'не мой личный кабинет', selected: false, value: 0 },
	{ key: 'нехуй', selected: false, value: 0 },
	{ key: 'нихуя', selected: false, value: 0 },
	{ key: 'ничего себе', selected: false, value: 0 },
	{ key: 'номер паспорта', selected: false, value: 0 },
	{ key: 'ну вот', selected: false, value: 0 },
	{ key: 'облом', selected: false, value: 0 },
	{ key: 'обломить', selected: false, value: 0 },
	{ key: 'обращаться', selected: false, value: 0 },
	{ key: 'ограничение', selected: false, value: 0 },
	{ key: 'одну минуту', selected: false, value: 0 },
	{ key: 'ператор', selected: false, value: 0 },
	{ key: 'оставайтесь', selected: false, value: 0 },
	{ key: 'оставайтесь на линии', selected: false, value: 0 },
	{ key: 'оставил заявку', selected: false, value: 0 },
	{ key: 'оставил обращение', selected: false, value: 0 },
	{ key: 'оставлял заявку', selected: false, value: 0 },
	{ key: 'оставлял обращение', selected: false, value: 0 },
	{ key: 'отвали', selected: false, value: 0 },
	{ key: 'отмазка', selected: false, value: 0 },
	{ key: 'отправил данные', selected: false, value: 0 },
	{ key: 'отправил заявку', selected: false, value: 0 },
	{ key: 'отправил обращение', selected: false, value: 0 },
	{ key: 'отправлял обращение', selected: false, value: 0 },
	{ key: 'охуеть', selected: false, value: 0 },
	{ key: 'очень приятно', selected: false, value: 0 },
	{ key: 'падла', selected: false, value: 0 },
	{ key: 'параша', selected: false, value: 0 },
	{ key: 'парить', selected: false, value: 0 },
	{ key: 'паспортные данные', selected: false, value: 0 },
	{ key: 'педик', selected: false, value: 0 },
	{ key: 'пердун', selected: false, value: 0 },
	{ key: 'перевод', selected: false, value: 0 },
	{ key: 'песец', selected: false, value: 0 },
	{ key: 'пидар', selected: false, value: 0 },
	{ key: 'пидарас', selected: false, value: 0 },
	{ key: 'пидор', selected: false, value: 0 },
	{ key: 'пидорас', selected: false, value: 0 },
	{ key: 'пизда', selected: false, value: 0 },
	{ key: 'пиздабол', selected: false, value: 0 },
	{ key: 'пизданутый', selected: false, value: 0 },
	{ key: 'пиздануть', selected: false, value: 0 },
	{ key: 'пиздатый', selected: false, value: 0 },
	{ key: 'пиздёж', selected: false, value: 0 },
	{ key: 'пиздеть', selected: false, value: 0 },
	{ key: 'пиздец', selected: false, value: 0 },
	{ key: 'пиздить', selected: false, value: 0 },
	{ key: 'пиздобол', selected: false, value: 0 },
	{ key: 'пиздос', selected: false, value: 0 },
	{ key: 'пиздун', selected: false, value: 0 },
	{ key: 'пиздюк', selected: false, value: 0 },
	{ key: 'пиздюли', selected: false, value: 0 },
	{ key: 'пипец', selected: false, value: 0 },
	{ key: 'пожалуйста', selected: false, value: 0 },
	{ key: 'полиция', selected: false, value: 0 },
	{ key: 'поменялся номер', selected: false, value: 0 },
	{ key: 'попиздеть', selected: false, value: 0 },
	{ key: 'потерял сим-карту', selected: false, value: 0 },
	{ key: 'потерял телефон', selected: false, value: 0 },
	{ key: 'потерялся номер', selected: false, value: 0 },
	{ key: 'пофиг', selected: false, value: 0 },
	{ key: 'похуист', selected: false, value: 0 },
	{ key: 'похуй', selected: false, value: 0 },
	{ key: 'правоохранительный', selected: false, value: 0 },
	{ key: 'претензия', selected: false, value: 0 },
	{ key: 'ривет', selected: false, value: 0 },
	{ key: 'придурок', selected: false, value: 0 },
	{ key: 'проблема', selected: false, value: 0 },
	{ key: 'проебать', selected: false, value: 0 },
	{ key: 'прокуратура', selected: false, value: 0 },
	{ key: 'разводить', selected: false, value: 0 },
	{ key: 'разъебать', selected: false, value: 0 },
	{ key: 'регистрация', selected: false, value: 0 },
	{ key: 'рожа', selected: false, value: 0 },
	{ key: 'рыть', selected: false, value: 0 },
	{ key: 'сейчас уточню', selected: false, value: 0 },
	{ key: 'серия', selected: false, value: 0 },
	{ key: 'смена номера', selected: false, value: 0 },
	{ key: 'сменить', selected: false, value: 0 },
	{ key: 'смотрите', selected: false, value: 0 },
	{ key: 'собственно', selected: false, value: 0 },
	{ key: 'спасибо за обращение', selected: false, value: 0 },
	{ key: 'спасибо за ожидание', selected: false, value: 0 },
	{ key: 'спиздеть', selected: false, value: 0 },
	{ key: 'спиздить', selected: false, value: 0 },
	{ key: 'срака', selected: false, value: 0 },
	{ key: 'сраный', selected: false, value: 0 },
	{ key: 'срач', selected: false, value: 0 },
	{ key: 'срок', selected: false, value: 0 },
	{ key: 'сроки рассмотрения', selected: false, value: 0 },
	{ key: 'ссать', selected: false, value: 0 },
	{ key: 'ссыкун', selected: false, value: 0 },
	{ key: 'стерва', selected: false, value: 0 },
	{ key: 'стрёмно', selected: false, value: 0 },
	{ key: 'стукач', selected: false, value: 0 },
	{ key: 'суд', selected: false, value: 0 },
	{ key: 'сук', selected: false, value: 0 },
	{ key: 'сучок', selected: false, value: 0 },
	{ key: 'так', selected: false, value: 0 },
	{ key: 'так вот', selected: false, value: 0 },
	{ key: 'так далее', selected: false, value: 0 },
	{ key: 'так сказать', selected: false, value: 0 },
	{ key: 'таким образом', selected: false, value: 0 },
	{ key: 'тёлка', selected: false, value: 0 },
	{ key: 'типа', selected: false, value: 0 },
	{ key: 'типа того', selected: false, value: 0 },
	{ key: 'трахать', selected: false, value: 0 },
	{ key: 'ублюдок', selected: false, value: 0 },
	{ key: 'уебан', selected: false, value: 0 },
	{ key: 'уёбище', selected: false, value: 0 },
	{ key: 'уёбок', selected: false, value: 0 },
	{ key: 'урка', selected: false, value: 0 },
	{ key: 'урод', selected: false, value: 0 },
	{ key: 'усраться', selected: false, value: 0 },
	{ key: 'ушлёпок', selected: false, value: 0 },
	{ key: 'фактически', selected: false, value: 0 },
	{ key: 'фамилия', selected: false, value: 0 },
	{ key: 'фигня', selected: false, value: 0 },
	{ key: 'фиговый', selected: false, value: 0 },
	{ key: 'фраер', selected: false, value: 0 },
	{ key: 'фуфло', selected: false, value: 0 },
	{ key: 'халява', selected: false, value: 0 },
	{ key: 'хан', selected: false, value: 0 },
	{ key: 'харя', selected: false, value: 0 },
	{ key: 'хачик', selected: false, value: 0 },
	{ key: 'хер', selected: false, value: 0 },
	{ key: 'херово', selected: false, value: 0 },
	{ key: 'херовый', selected: false, value: 0 },
	{ key: 'хитрожопый', selected: false, value: 0 },
	{ key: 'хлёбать', selected: false, value: 0 },
	{ key: 'хрен', selected: false, value: 0 },
	{ key: 'хреновый', selected: false, value: 0 },
	{ key: 'хрень', selected: false, value: 0 },
	{ key: 'хуёво', selected: false, value: 0 },
	{ key: 'хуёвый', selected: false, value: 0 },
	{ key: 'хуй', selected: false, value: 0 },
	{ key: 'хуйло', selected: false, value: 0 },
	{ key: 'хуйня', selected: false, value: 0 },
	{ key: 'хуль', selected: false, value: 0 },
	{ key: 'цб', selected: false, value: 0 },
	{ key: 'центральный банк', selected: false, value: 0 },
	{ key: 'чмо', selected: false, value: 0 },
	{ key: 'чувак', selected: false, value: 0 },
	{ key: 'чувиха', selected: false, value: 0 },
	{ key: 'чурбан', selected: false, value: 0 },
	{ key: 'чурка', selected: false, value: 0 },
	{ key: 'шалава', selected: false, value: 0 },
	{ key: 'шлюха', selected: false, value: 0 },
	{ key: 'шмара', selected: false, value: 0 },
	{ key: 'это самое', selected: false, value: 0 },
]

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
			x: i + 8 + ':00',
			y: random,
		}
		result.push(obj)
	}
	return result
}

const heatSeries = [
	{
		name: 'Воскресенье',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Суббота',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Пятница',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Четверг',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Среда',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Вторник',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
	{
		name: 'Понедельник',
		data: randomArray(14, {
			min: 0,
			max: 90,
		}),
	},
]

export { lib, words, words1, heatSeries }
