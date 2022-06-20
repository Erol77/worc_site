document.addEventListener('DOMContentLoaded', () => {

    // if (window.Element && !Element.prototype.closestMy) {
    //     Element.prototype.closestMy =
    //         function (s) {
    //             var matches = (this.document || this.ownerDocument).querySelectorAll(s),
    //                 i,
    //                 el = this;
    //             do {
    //                 i = matches.length;
    //                 while (--i >= 0 && matches.item(i) !== el) {};
    //             } while ((i < 0) && (el = el.parentElement));
    //             return el;
    //         };
    // }

    const burger = document.querySelector('.burger');
    const navBlock = document.querySelector('.nav_block');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        navBlock.slideToggle();
    })

    /************************* select */

    const selectStatus = new CustomSelect('#select-3', {
        name: 'status', // значение атрибута name у кнопки
        targetValue: 'status', // значение по умолчанию
        options: [
            ['status', 'По статусу'],
            ['no-work', 'Безработный'],
            ['work', 'Работает'],

        ], // опции
    });

    // const selectRegion = new CustomSelect('#select-region', {
    //     name: 'region', // значение атрибута name у кнопки
    //     targetValue: 'region', // значение по умолчанию
    //     options: [
    //         ['region', 'По Региону(ам)'],
    //         ['city', 'Населенному(ым) пункту(ам)'],

    //     ], // опции
    // });

    const selectType = new CustomSelect('#select-type', {
        name: 'type', // значение атрибута name у кнопки
        targetValue: 'type', // значение по умолчанию
        options: [
            ['type', 'По типу добавления'],
            ['response', 'Отклик'],
            ['selection-vvn', 'Подбор от ВВН'],
            ['selection-subscription', 'Подбор по подписке'],

        ], // опции
    });

    const selectComment = new CustomSelect('#select-comment', {
        name: 'comment', // значение атрибута name у кнопки
        targetValue: 'comment', // значение по умолчанию
        options: [
            ['comment', 'По комментарию'],
            ['type-add', 'По типу добавления'],
            ['have-comment', 'Есть комментарий'],
            ['no-comment', 'Нет комментарий'],

        ], // опции
    });

    const selectDialog = new CustomSelect('#select-dialog', {
        name: 'dialog', // значение атрибута name у кнопки
        targetValue: 'dialog', // значение по умолчанию
        options: [
            ['dialog', 'Наличие диалога'],
            ['have-dialog', 'Есть диалог'],
            ['no-dialog', 'Диалог не велся'],

        ], // опции
    });

    /****************end select */
    //     const selectDropdown = Array.from(document.querySelectorAll('.jq-selectbox'));
    //     // const navBlock = document.querySelector('.nav_block');
    //     selectDropdown.map((e, i) => e.addEventListener('click', function (el) {
    //         if (el.target === selectDropdown[i] && selectDropdown[i].classList.contains('opened')){
    //          selectDropdown[i].style = "display: inline-block; position: relative; z-index: 0;";
    //          selectDropdown[i].classList.toggle('opened');
    //          selectDropdown[i].querySelector('.jq-selectbox__dropdown').style = "position: absolute; display: none;";
    //          selectDropdown[i].querySelector('ul').style = "position: relative; list-style: none; overflow: auto; overflow-x: hidden";


    // }else{
    //             selectDropdown[i].style = "display: inline-block; position: relative; z-index: 100;";
    //                     selectDropdown[i].classList.toggle('opened');
    //             selectDropdown[i].querySelector('.jq-selectbox__dropdown').style="position: absolute; height: auto; bottom: auto; top: 30px; ";
    //             selectDropdown[i].querySelector('ul').style="position: relative; list-style: none; overflow: hidden auto; max-height: 312px;";
    // }
    //     }));
    /*******************************no worc */
    // document.addEventListener('click', (e) => {
    //     if (!e.target.closest('.checkselect checkselect1') &&
    // document.querySelector('.jq-selectbox').closestMy('opened')) {
    //         document.querySelector('.jq-selectbox .checkselect1 .opened').select.classList.remove('opened');
    // // forEach(select => {            select.classList.remove('opened');        });
    //     }
    // });


    /******       class="jq-selectbox__dropdown" style="position: absolute; height: auto; bottom: auto; top: 30px;       
    style="position: relative; list-style: none; overflow: hidden auto; max-height: 312px;"     */
    //        if (!(e.target)&& e.classList.contains('open')) {
    //		e.target.classList.remove('open'); console.log('click',e.target);e.stopPropagation();}
    //	$(document).on('click', function(e) {

    //			if (!$(e.target).closest(".checkselect").length) {
    //			$(e.target).classList.toggle('open');
    //                console.log('click',e.target);
    //			}
    //		e.stopPropagation();
    //	});

    /****************datepicker */


    // insertDate1('21.11.1953');

    function insertDate(selector, e = new Date().toLocaleString(), c = '') {
        let date = e.split('.')
        let month = {
            mo: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        }
        console.log(date, parseInt(date[1]) + '    ' + month.mo[parseInt(date[1]) - 1]);
        document.querySelector('#' + selector).value = date[0] + '  ' + month.mo[parseInt(date[1]) - 1] + '  ' + date[2];
        if (typeof c === 'function') { datepickerClose() };
    }
    const insertDate1 = (e) => insertDate('date-1', e);
    const insertDate2 = (e) => insertDate('date-2', e, datepickerClose());
    insertDate1('27.11.2021'); insertDate2(new Date().toLocaleDateString())
    xCal('datepicker1', {
        id: "date1",
        "class": "xcalend2",
        hide: 0,
        x: 0,
        autoOff: 0,
        autoOn: 0,
        now: 0,
        to: "datepicker1",
        fn: insertDate1,
    });
    // bold

    xCal('datepicker2', {
        id: "date2",
        "class": "xcalend2",
        hide: 0,
        x: 1,
        autoOff: 0,
        autoOn: 0,
        now: 0,
        to: "datepicker2",
        fn: insertDate2
    });
    const datePiker = document.querySelector('.datepicker_row');

    //   datePiker.querySelector('.bold').addEventListener('click', function () {
    //       datePiker.querySelector(".datepicker_windows").style.display = 'none';
    //       //  datePiker.querySelector(".datepicker_windows_row").style.display = 'block';
    //   });***********

    /****************datepicker end*/
    /*document.addEventListener('click', function(e) {
             console.log(e,'  click  ',e.target);
            if (!(e.target).closestMy(".datepicker_row")) {datePiker.style.display='none';
             // document.querySelector('.datepicker_windows').hide();
            }
             if (!(e.target).closestMy(".checkselect")) {
                if(checkselect.classList.contains('open'))checkselect.classList.toggle('open');                
                }
            e.stopPropagation();
          });*/

    //document.querySelector(".open_popup").magnificPopup({removalDelay:300,type:"inline"});
    //document.querySelector(".open_popup").magnificPopup({removalDelay:300,type:"inline"});

    /****************** checked */
    
    setChecked('#checkselect1');

    setChecked('#checkselect2', 'По возрасту');
    setChecked('#checkselect3', 'По региону(ам)/по городу(ам)');
   

});


function datepickerOpen() {
    document.querySelector(".datepicker_windows").style.display = 'block';
    document.querySelector(".datepicker_windows_row").style.display = '';
    return false;
}

function datepickerClose() {
    document.querySelector(".datepicker_windows").style.display = 'none';
    document.querySelector('.datepicker_windows_row').style.display = 'none';
    return false;
}
document.addEventListener('click', (el) => {
    // console.log(el.target.dataset +'    '+el.target.closest('td')+
    // '    '+el.target.closest('#date2')+'    '+el.target.closest('.xcalend'))//closest xcalend
    if (!el.target.closest('.datepicker_row') && !el.target.closest('td')) {
        datepickerClose();
    }
})
    //|| el.target.closest('#date2') && el.target.closest('td')  rgba(255,153,0,.2);