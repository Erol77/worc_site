var goods = [
"Телевизор Haier LE24K6000S",
"Телевизор LG 32LM630BPLA",
"Телевизор Samsung UE32M5550AU",
"Телевизор Haier 32 Smart TV BX",
"Телевизор Haier 55 Smart TV BX",
"Телевизор LG 49NANO816NA",
"Телевизор LG 55NANO866NA",
"Телевизор Samsung UE55TU7097U",
"Телевизор LG 55UN74006LA",
"Телевизор Samsung UE55TU8570U",
"Телевизор Haier LE24K6500SA",
"Телевизор Samsung UE43J5272AU",
"Телевизор Samsung BE32R-B",
"Телевизор Samsung UE43TU7570U",
"Телевизор Samsung UE75TU7100U",
"Телевизор Samsung QE55Q87TAU",
"Телевизор LG 49NANO866NA",
"Телевизор Samsung UE50TU7170U",
"Телевизор Samsung UE43TU7097U",
"Телевизор Samsung UE50TU8570U",
"Телевизор Samsung UE43T5300AU",
"Телевизор LG 49UN73906LE",
"Телевизор LG 55UN70006LA",
"Телевизор LG 65UN73506LB",
"Телевизор Haier 58 Smart TV BX",
"Телевизор Haier 50 Smart TV BX",
"Телевизор Samsung QE50Q87TAU",
"Телевизор Samsung UE32T5300AU",
"Телевизор LG 49UK6200PLA",
"Телевизор LG 49UM7020PLF",
"Телевизор Samsung UE24N4500AU"
];
// Главный DIV для результатов пагинации
var pagDiv = document.createElement("div");
pagDiv.setAttribute("class","pagDiv");

// Получаем элемент h1
var pagH1 = document.getElementsByTagName("h1")[0];

// Устанавливаем общий блок пагинации под заголовком h1
pagH1.after(pagDiv);

// Линия кнопок над результатами отбора
var bl1 = document.createElement("div");
bl1.setAttribute("class","bl1");

// Линия кнопок под результатами отбора
var bl2 = document.createElement("div");
bl2.setAttribute("class","bl2");

// Блок для отрисовки результатов
var result = document.createElement("div");
result.setAttribute("class","result");
//3
var quantityforselection = 7;
//4
function paintResult (arr){
   for(i=0, r=""; i<arr.length; i++){
      r += `<p class="result-item">${arr[i]}</p>`
   }
   return r
}

//Считает нужное количество кнопок пагинации:

function numberofbuttons(arr, num){
   return Math.ceil(arr.length / num)
}

//4.3 - Обёртка для линий с кнопками пагинации - HTML-разметка
function paintPaginationButton(count){
   for(i=1, r=""; i <= count; i++){
      r += `<button class="pb">${i}</button>`
   }
   return r
}
//4.4 - Обработчик события нажатия на кнопку страницы пагинации
document.addEventListener('click', function(event){
   if([...event.target.classList].includes("pb")){
      var y = event.target.textContent;
      var start = quantityforselection*(y - 1);
      var end = quantityforselection*y;
      result.innerHTML = paintResult(goods.slice(start, end));
   }else{
      console.log(event.target)
   }
});
//5
bl1.innerHTML = paintPaginationButton(numberofbuttons(goods,quantityforselection));

bl2.innerHTML = paintPaginationButton(numberofbuttons(goods,quantityforselection));

// Первичная отрисовка результата
result.innerHTML = paintResult(goods.slice(0, quantityforselection))

// Помещаем линии кнопок и результат в общий блок пагинации
pagDiv.append(bl1, result, bl2)