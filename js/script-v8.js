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

})