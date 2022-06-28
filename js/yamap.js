
	ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [57.626526974487994, 39.837947427261305], // Координаты центра карты[57.626526974487994,39.837947427261305]
			zoom: 17 // Маштаб карты
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([43.238253,76.945465], { // Координаты метки объекта
			balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>" // Подсказка метки
		}, {
			preset: "twirl#redDotIcon" // Тип метки
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление метки
		myPlacemark.balloon.open(); // Открытие подсказки метки
		
	};
	
