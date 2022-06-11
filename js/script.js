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

    const selectRegion = new CustomSelect('#select-region', {
        name: 'region', // значение атрибута name у кнопки
        targetValue: 'region', // значение по умолчанию
        options: [
            ['region', 'По Региону(ам)'],
            ['city', 'Населенному(ым) пункту(ам)'],

        ], // опции
    });

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

    function insertDate1(e) {
        console.log([...e]);
        document.querySelector('#date-1').value = e;
    }

    // insertDate1('21.11.1953');

    xCal('datepicker2', {
        id: "date2",
        "class": "xcalend2",
        hide: 0,
        x: 0,
        autoOff: 0,
        autoOn: 0,
        now: 0,
        to: "datepicker2",
        fn: insertDate2
    });

    function insertDate2(e = new Date().toLocaleString()) {
        console.log(e);
        document.querySelector('#date-2').value = e;
    }
    insertDate2();
    const datePiker = document.querySelector('.datepicker_row');
    datePiker.addEventListener('click', function () {
        datePiker.querySelector(".datepicker_windows").style.display = 'block';
        // datePiker.querySelector(".datepicker_windows_row").addEventListener('mouseout', function () {
    });
    // datePiker.querySelector(".datepicker_windows_row").addEventListener('mouseout', function () {
    //     datePiker.querySelector(".datepicker_windows").style.display = 'none';



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
    //document.querySelector
    // $("#datepicker").datepicker({dateFormat: 'dd MM yy', inline:true, altField: "#alternate",});
    //const date2 = document.querySelector("#datepicker2");
    //date2.datepicker({dateFormat: 'dd MM yy', inline:true, altField: "#alternate2",});

    //document.querySelector('.select').styler({ selectSearch: true });

    //document.querySelector(".open_popup").magnificPopup({removalDelay:300,type:"inline"});
    //document.querySelector(".open_popup").magnificPopup({removalDelay:300,type:"inline"});

    /****************** checked */
    function setChecked(target, name = 'По вакансии') {

        var checked = document.querySelector(target),
            closeBtn = checked.querySelector('.input-reset'),
            checkedSel = checked.querySelector('.form-control option');


        checked.addEventListener('click', () => {
            var checkedNum = checked.querySelectorAll('input[type="checkbox"]:checked');

            //console.log(chekedNum.length, ' - ', chekedSel.textContent);
            if (checkedNum.length) {
                checkedSel.textContent = name + ' (выбрано: ' + checkedNum.length + ')';
                closeBtn.classList.toggle('hide');
                //cheked.append(``);
            } else {
                checkedSel.textContent = name;
            }
        });
        closeBtn.addEventListener('click', () => {

            closeBtn.classList.add('hide');
            //  applyBtn[i].classList.add('hide');
            //  applyBtn[i].classList.remove('show')
            //  checkselect[i].classList.remove('open');
            const clear = Array.from(checked.querySelectorAll('input[type="checkbox"]:checked'));
            clear.map(e => e.checked = false);
        });
    }; //.querySelector('select option') По вакансии (выбрано:2)», 

    setChecked('.checkselect1');

    setChecked('.checkselect2', 'По возрасту');

    const checkselect = Array.from(document.querySelectorAll('.checkselect'));
    const closeBtn = Array.from(document.querySelectorAll('.input-reset'));
    const applyBtn = Array.from(document.querySelectorAll('.apply'));
    // открыть чекбоксы
    /*********************close to un enabled */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.checkselect')) {
            document.querySelectorAll('.checkselect').forEach(select => {
                select.classList.remove('open');
            });
        }

        if (!e.target.closest('.datepicker_windows')) {

            datePiker.style.display = 'none';

        }

    });
    checkselect.map((e, i) => {

        e.addEventListener('click', function () {
            this.classList.toggle('open');
            //   closeBtn[i].classList.toggle('hide');
            applyBtn[i].classList.toggle('hide');
            applyBtn[i].classList.toggle('show');
        });

        document.addEventListener('click', (el) => {
            if (el.target === closeBtn[i]) {
                closeBtn[i].classList.add('hide');
                applyBtn[i].classList.add('hide');
                applyBtn[i].classList.remove('show')
                checkselect[i].classList.remove('open');
                const clear = Array.from(checkselect[i].querySelectorAll('input[type="checkbox"]:checked'));
                clear.map(e => e.checked = false);

                if (el.target === checkselect[i] || el.target === applyBtn[i] || el.target.closest('.checkselect') === null) { // document.querySelector("body") e.target.getAttribute('.data-close') == ''      closeModal();
                    closeBtn[i].classList.add('hide');
                    applyBtn[i].classList.add('hide');
                    applyBtn[i].classList.remove('show')
                    checkselect[i].classList.remove('open');
                    checkselect[i].style.display = 'none';
                }
                // if (e.target.closest('.popup') === null) {
                //     popup.style.display = 'none';
                // }

            }
           });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && checkselect[i].classList.contains('open')) {
                closeBtn[i].classList.add('hide');
                applyBtn[i].classList.add('hide');
                applyBtn[i].classList.remove('show')
                checkselect[i].classList.remove('open');
            }
        });
    });

});