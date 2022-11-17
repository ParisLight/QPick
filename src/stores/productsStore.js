import { defineStore} from "pinia";

export const useStore = defineStore('products', {

state: () => ({
	headphones: [
		{
			id: 1,
			currentCount: 1,
			name: "Apple BYZ S8521",
			img: 'Apple BYZ S8521.png',
			price: 2321,
			grade: '4.7',
			category: 'Наушники',
			newPrice: 3527,
			addFavorites: false,
			imgArray: ['Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
		{
			id: 2,
			currentCount: 1,
			name: "Apple EarPods",
			img: 'Apple EarPods.png',
			price: 2322,
			grade: '4.7',
			category: 'Наушники',
			newPrice: 3527,
			sale: 20,
			addFavorites: false,
			imgArray: ['Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png'],
			characters: [
				"Активное шумоподавление: Да",
				"Вес: 12420гр",
				"Влагозащита: Да",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
		{
			id: 3,
			currentCount: 1,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 1011111гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
		{
			id: 4,
			currentCount: 1,
			name: "Apple BYZ S8521",
			img: 'Apple BYZ S8521.png',
			price: 3527,
			newPrice: 2927,
			sale: 20,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
		{
			id: 5,
			currentCount: 1,
			name: "Apple EarPods",
			img: 'Apple EarPods.png',
			price: 2322,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
		{
			id: 6,
			currentCount: 1,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Airpods.png','Airpods.png','Airpods.png','Airpods.png','Airpods.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
	],

	wireless: [
		{ id: 7,
			currentCount: 1,
			name: 'Apple AirPods', 
			img: 'Airpods.png', price: 2323, 
			grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['Airpods.png','Airpods.png','Airpods.png','Airpods.png','Airpods.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
			

		{ id: 8, 
			currentCount: 1,
			name: 'GERLAX GH-04', 
			img: 'Gerlax gh-04.png', 
			price: 2323, grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},

		{ id: 9, 
			currentCount: 1,
			name: 'BOROFONE BO4', 
			img: 'borofone bo4.png', 
			price: 2323, grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['borofone bo4.png','borofone bo4.png','borofone bo4.png','borofone bo4.png','borofone bo4.png'],
			characters: [
				"Активное шумоподавление: Нет",
				"Вес: 10гр",
				"Влагозащита: Нет",
				"Длина кабеля: 1.2 м",
				"Комплектация: Наушники",
				"Материал корпуса: Пластик, резина",
				"Микрофон: Да",
				"Назначение: Проводные наушники",
				"Ответить/закончить разговор: Да",
				"Разъем наушников: Lightning",
				"Регулятор громкости: Да",
				"Тип крепления: Без крепления",
				'Тип наушников: Вкладыши ("таблетки")',
				"Тип подключения: Проводное",
				"Частотный диапазон: 20 Гц - 20000 Гц",
				"Чувствительность: 109 дБ"
			]
		},
	],
	coversList: [
		{ id: 10, name: 'Стеклянные', img: 'glasses.png', category: 'Чехлы'},
		{ id: 11, name: 'Силиконовые', img: 'silicone.png', category: 'Чехлы'},
		{ id: 12, name: 'Кожаные', img: 'leather.png', category: 'Чехлы'},
	],

	currentProduct: null,
}),

actions: {
	viewProduct(item){
		this.currentProduct = item;
	},

	
}
})

