document.addEventListener('DOMContentLoaded', () => {

    const configUser = {
        attributes: true,
        childList: true,
        subtree: true,
        // attributeFilter: ['data-value']
    };
    const callbackUser = function (mutationsList) {
        for (let mutation of mutationsList) {
            // if (mutation.type === 'childList') {
            //   modalUser()//          console.log('A child node has been added or removed.');
            // }
            console.log('A mutation.  ' + mutation);
            // selectToRubric();
        }
    };
    let mutationsList = []
    const observerUser = new MutationObserver(callbackUser);
    observerUser.observe(document.forms[0], configUser);


    // setChecked('#checkselect-category', 'Выберите рубрику');

    const selectRubric = new CustomSelect('#select-rubric', {
        name: 'rubric', // значение атрибута name у кнопки
        targetValue: 'rubric', // значение по умолчанию
        options: [
            ['rubric', 'Выберите рубрику'],
            ['HR_specialists_-_Business_Coaches', 'HR специалисты - Бизнес-тренеры'],
            ['Autobusiness_-_Service', 'Автобизнес - Сервисное обслуживание'],
            ['Administrative_staff', 'Административный персонал'],
            ['Banks_-_Investments_-_Leasing', 'Банки - Инвестиции - Лизинг'],
            ['Landscaping', 'Благоустройство'],
            ['Accounting_-_Taxes_-_Enterprise_Finance', 'Бухгалтерия - Налоги - Финансы предприятия'],
            ['Hotels_-_Restaurants_-_Cafes', 'Гостиницы - Рестораны - Кафе'],
            ['State_institutions_-_Local_self-government_-_non-farmer', 'Государственные учреждения - Местное самоуправление - некоммер'],
            ['Design_-_Graphics_-_Photos', 'Дизайн - Графика - Фото'],
            ['Procurement_-_Supply', 'Закупки - Снабжение'],
            ['Installation_and_service', 'Инсталляция и сервис'],
            ['Consulting_-_Analytics_-_Audit', 'Консалтинг - Аналитика - Аудит'],
            ['Culture_-_Show_Business_-_Entertainment', 'Культура - Шоу-бизнес - Развлечения'],
            ['Marketing_-_Advertising_-_PR', 'Маркетинг - Реклама - PR'],
            ['Media_Publishing', 'Медиа - Издательское дело'],
            ['Medicine_-_Pharmaceuticals_-_Healthcare', 'Медицина - Фармацевтика - Здравоохранение'],
            ['Marine_specialties', 'Морские специальности'],
            ['Science_-_Education', 'Наука - Образование'],
            ['Realty', 'Недвижимость'],
            ['Non-profit_-_Public_organizations', 'Некоммерческие - Общественные организации'],
            ['Security_-_Security_-_Law_enforcement_agencies', 'Охрана - Безопасность - Силовые структуры'],
            ['Translator', 'Переводчик'],
            ['Salesperson_-_Customer_Service_Manager', 'Продавец - Менеджер по работе с клиентами'],
            ['Production_-_Process_Engineers', 'Производство - Инженеры - Технологи'],
            ['Working_specialties_-_Couriers_-_Home_Staff', 'Рабочие специальности - Курьеры - Персонал для дома'],
            ['Agriculture_-_Agribusiness_-_Forestry', 'Сельское хозяйство - Агробизнес - Лесное хозяйство'],
            ['Sport_-_Beauty_-_Wellness', 'Спорт - Красота - Оздоровление'],
            ['Insurance', 'Страхование'],
            ['Construction_-_Architecture', 'Строительство - Архитектура'],
            ['Students_-_The_beginning_of_a_career_-_Without_experience', 'Студенты - Начало карьеры - Без опыта'],
            ['Telecommunications_-_Communication', 'Телекоммуникации - Связь'],
            ['Top_Management_-_Directors', 'Топ-менеджмент - Директора'],
            ['Trade_-_Sales_-_Client-Management', 'Торговля - Продажи - Клиент-менеджмент'],
            ['Transport_-_Logistics', 'Транспорт - Логистика'],
            ['Tourism_-_Travel', 'Туризм - Путешествия'],
            ['Lawyers,_lawyers,_notaries', 'Юристы, адвокаты, нотариусы'],

        ], // опции
    });
    function addTextToTarget(selector, target) {
        const data = document.querySelector(selector);
        let text = document.querySelector(target);
        text.innerHTML = data.textContent;
        // console.log(data.textContent + '    ' + text.value)
    }

    const selectToRubric = () => addTextToTarget('#select-rubric .select__toggle', '.type-category__item');
    // selectToRubric();
    const selectCategory = new CustomSelect('#select-category');
    // const selectToCategory = () => addTextToTarget('#select-category .select__toggle', '.select__select-category');

    const selectNationality = new CustomSelect('#nationality',
        {
            name: 'nationality', // значение атрибута name у кнопки  education
            targetValue: 'nationality', // значение по умолчанию
            options: [
                ['nationality', '--'],
                ['russ', 'Русский'],
                ['no russ', 'Не русский'],

            ], // опции 
        });
    const selectEducation = new CustomSelect('#education',
        {
            name: 'education', // значение атрибута name у кнопки  education
            targetValue: 'education', // значение по умолчанию
            options: [
                ['education', '---'],
                ['no-education', 'без образования'],
                ['scull', 'школа'],

            ], // опции 
        });
    addTextToTarget('#education .select__toggle', '.select__education--education');

    const selectMonth = new CustomSelect('#beginning--month', {
        name: 'beginning--month', // значение атрибута name у кнопки  education
        targetValue: 'education', // значение по умолчанию
        options: [
            ['education', '--'],
            ['1', '01'], ['2', '02'], ['3', '03'], ['4', '04'], ['5', '05'], ['6', '06'], ['7', '07'], ['8', '08'], ['9', '09'], ['10', '10'], ['11', '11'], ['12', '12'],

        ], // опции 
    });

    const selectYear = new CustomSelect('#beginning--year', {
        name: 'beginning--year', // значение атрибута name у кнопки  education
        targetValue: 'education', // значение по умолчанию
        options: [
            ['education', '--'],
            ['1', '01'],
            ['2', '02'],
            ['3', '03'],
            ['4', '04'],
            ['5', '05'],
            ['6', '06'],
            ['7', '07'],
            ['8', '08'],
            ['9', '09'],
            ['10', '10'],
            ['11', '11'],
            ['12', '12'],

        ], // опции 
    });
    const selectMonthEbd = new CustomSelect('#end--month', {
        name: 'end--month', // значение атрибута name у кнопки  education
        targetValue: 'education', // значение по умолчанию
        options: [
            ['education', '--'],
            ['1', '01'], ['2', '02'], ['3', '03'], ['4', '04'], ['5', '05'], ['6', '06'], ['7', '07'], ['8', '08'], ['9', '09'], ['10', '10'], ['11', '11'], ['12', '12'],

        ], // опции 
    });

    const selectYearEnd = new CustomSelect('#end--year', {
        name: 'end--year', // значение атрибута name у кнопки  education
        targetValue: 'education', // значение по умолчанию
        options: [
            ['education', '--'],
            ['1', '01'],
            ['2', '02'],
            ['3', '03'],
            ['4', '04'],
            ['5', '05'],
            ['6', '06'],
            ['7', '07'],
            ['8', '08'],
            ['9', '09'],
            ['10', '10'],
            ['11', '11'],
            ['12', '12'],

        ], // опции  year--end
    });

    const selectEbdYear = new CustomSelect('#year--end', {
        name: 'year--end', // значение атрибута name у кнопки  education
        targetValue: 'education', // значение по умолчанию
        options: [
            ['education', '--'],
            ['1', '01'], ['2', '02'], ['3', '03'], ['4', '04'], ['5', '05'], ['6', '06'], ['7', '07'], ['8', '08'], ['9', '09'], ['10', '10'], ['11', '11'], ['12', '12'],

        ], // опции language
    });

    const selectLlngwich = new CustomSelect('#language', {
        name: 'language', // значение атрибута name у кнопки  education
        targetValue: 'language', // значение по умолчанию
        options: [
            ['language', '--'],
            ['1', 'Русский'], ['2', 'Французский'], ['3', 'Английский'], ['4', 'Немецкий'], ['5', 'Ты что полиглот'], ['6', '06'], ['7', '07'], ['8', '08'], ['9', '09'], ['10', '10'], ['11', '11'], ['12', '12'],

        ], // опции language
    });

    const selectSkills = new CustomSelect('#skills', {
        name: 'languageCvalification', // значение атрибута name у кнопки  education
        targetValue: 'languageCvalification', // значение по умолчанию
        options: [
            ['languageCvalification', '--'],
            ['1', 'Свободно читаю'], ['2', 'Свободно говорю'], ['3', 'Читаю с переводчиком'], ['4', 'Понимаю но говорить не могу'], ['5', 'Знаю такое название'], ['6', '06'], ['7', '07'], ['8', '08'], ['9', '09'], ['10', '10'], ['11', '11'], ['12', '12'],

        ], // опции language
    });


    /*
    $('textarea').focus(function () {
        if ($(this).val() === placeholder) {
            $(this).attr('value', '');
        }
    });
    
    $('textarea').blur(function () {
        if ($(this).val() === '') {
            $(this).attr('value', placeholder);
        }
    });
    */

})
function showToltip(select) {
    document.querySelector(select).style.display = 'block'
}

 var placeholder = 'Начните вводить должностные функции и ключевые навыки\nчтобы получить больше приглашений от работодателей';
// const textArea = document.getElementById('textArea')
// textArea.value = placeholder;

// textArea.addEventListener('focus', () => {
//    if (textArea.value === placeholder) {
//      textArea.value = '';
//      textArea.style = 'font:inherit; color:#665800;';
//    }
// });
// textArea.addEventListener('blur', () => {
//     if (textArea.value === '') {
//         textArea.value = placeholder;
//         textArea.style = 'font:none; rgba(102, 88, 0, 0.5);';
//     }
// })

function textAreaToPlaceholder(placeholder, selector) {
    // var placeholder = 'Начните вводить должностные функции и ключевые навыки\nчтобы получить больше приглашений от работодателей';
    const textArea = document.getElementById(selector)
    textArea.value = placeholder;
    textArea.addEventListener('focus', () => {
        if (textArea.value === placeholder) {
            textArea.value = '';
            textArea.style = 'font:inherit; color:#665800;';
        }
    });
    textArea.addEventListener('blur', () => {
        if (textArea.value === '') {
            textArea.value = placeholder;
            textArea.style = 'font:none; rgba(102, 88, 0, 0.5);';
        }
    })
}

textAreaToPlaceholder(placeholder,'textArea');
textAreaToPlaceholder('Начните вводить здесь','key-skills');
let placeAbout = 'Чтобы побудить работодателя пригласить именно вас, укажите свои деловые качества и профессиональные навыки. Расскажите про ваши достижения, напишите чем вы можете быть полезны компании на этой должности.';

textAreaToPlaceholder(placeAbout,'about');