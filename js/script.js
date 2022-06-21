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
    // }, 'data-delete', 'data-edit','data-modal'
    // const configUser = {
        // attributes: true,
        // childList: true,
        // subtree: true,
        // attributeFilter: ['data-value']
    //   };
    //   const callbackUser = function (mutationsList) {
        // for (let mutation of mutationsList) {
          // if (mutation.type === 'childList') {
          //   modalUser()//          console.log('A child node has been added or removed.');
          // }
        //   console.log('A mutation.  ' + mutation);
        //  selectToStatus();
        //  selectToType();
        //  selectToComment();
        //  selectToDialog();
        // }
    //   };
// let mutationsList=[]
    //   const observerUser = new MutationObserver(callbackUser);
    //   observerUser.observe(document.forms[0], configUser);


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
    const selectToStatus = () => addTextToTarget('#select-3 .select__toggle', '.select__select-3');
    selectToStatus();
    // const selectRegion = new CustomSelect('#select-region', {
    //     name: 'region', // значение атрибута name у кнопки
    //     targetValue: 'region', // значение по умолчанию
    //     options: [
    //         ['region', 'По Региону(ам)'],
    //         ['city', 'Населенному(ым) пункту(ам)'],

    //     ], // опции
    // });

    // const selectType = new CustomSelect('#select-type', {
    //     name: 'type', // значение атрибута name у кнопки
    //     targetValue: 'type', // значение по умолчанию
    //     options: [
    //         ['type', 'По типу добавления'],
    //         ['response', 'Отклик'],
    //         ['selection-vvn', 'Подбор от ВВН'],
    //         ['selection-subscription', 'Подбор по подписке'],

    //     ], // опции
    // });
//   const selectToType = () => addTextToTarget('#select-type .select__toggle', '.select__select-type');
//   selectToType();

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
const selectToComment = () => addTextToTarget('#select-comment .select__toggle', '.select__select-comment');
selectToComment();

    const selectDialog = new CustomSelect('#select-dialog', {
        name: 'dialog', // значение атрибута name у кнопки
        targetValue: 'dialog', // значение по умолчанию
        options: [
            ['dialog', 'Наличие диалога'],
            ['have-dialog', 'Есть диалог'],
            ['no-dialog', 'Диалог не велся'],

        ], // опции
    });
const selectToDialog = () => addTextToTarget('#select-dialog .select__toggle', '.select__select-dialog');
selectToDialog();
    /****************end select */
   
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
  setChecked('#checkselect-type', 'По типу добавления');

   

});



    //|| el.target.closest('#date2') && el.target.closest('td')  rgba(255,153,0,.2);

      
    function setChecked(target, name = 'По вакансии') {

        var checked = document.querySelector(target),
            closeBtn = checked.querySelector('.input-reset'),
            checkedSel = checked.querySelector('.form-control option');
        //.form-control--selected
    
        checked.addEventListener('click', () => {
            var checkedNum = Array.from(checked.querySelectorAll('input[type="checkbox"]:checked'));
    
            // if(!checked.closest('form-control--selected')&&!closeBtn.closest('hide')){/**/
            // closeBtn.classList.add('hide');}
    
    
    
            if (checkedNum.length) {
                checkedSel.textContent = name + ' (выбрано: ' + checkedNum.length + ')';
                checked.classList.add('form-control--selected');
                // checkedSel.classList.add('form-control--selected');
                if (closeBtn.closest('.hide')) {
                    closeBtn.style.right = -26 + 'px';
                    closeBtn.classList.remove('hide');
                }
    
                checkedSel.parentElement.style.backgroundColor = '#fbf7e7';
                checkedSel.parentElement.style.borderRadius = '5px';
                checkedSel.parentElement.style.border = '1px solid #e3dcb2'; //border-right-width: 1px;
                checked.style.width = 92 + '%';
                // checked.style.after.right = 80+'%';
                checked.style.border = 'none'; //border-right-width: 1px;
                let data = name + ' (выбрано: ' + checkedNum.length + ')';
                checkedNum.map(i => {
                    // console.log(i.parentElement.textContent)
                    data += i.parentElement.textContent.trim() + ', ';
                });
                checkedSel.setAttribute('data-text', data);
                checkedSel.parentElement.parentElement.setAttribute('onmouseover', `toolTip('${data}')`);
                checkedSel.parentElement.parentElement.setAttribute('onmouseout', `toolTip()`);
                // checkedSel
                checkedSel.parentElement.parentElement.classList.add('hide__text');
                checkedSel.parentElement.parentElement.setAttribute('data-show', 'text');
            } else {
                checkedSel.textContent = name;
                checkedSel.parentElement.parentElement.setAttribute('onmouseover', `toolTip('${name}')`);
                checkedSel.parentElement.parentElement.setAttribute('onmouseout', `toolTip()`);
                checked.style.width = 100 + '%';
                if (checked.closest('.form-control--selected')) {/**/
                    // checked.classList.remove('form-control--selected');
                    closeDialog();
                }
            }
            if (!checked.closest('.form-control--selected')) {/**/
                closeBtn.classList.add('hide');
            }
    
        });
        function closeDialog() {
            closeBtn.classList.add('hide');
            checked.classList.remove('form-control--selected')
            const clear = Array.from(checked.querySelectorAll('input[type="checkbox"]:checked'));
            clear.map(e => e.checked = false);
            checkedSel.parentElement.style.backgroundColor = '#fff';
            checkedSel.parentElement.style.borderRadius = '0px';
            checked.style.border = ''; //border-right-width: 1px;
            checkedSel.removeAttribute('data-text');
    
            checkedSel.parentElement.parentElement.classList.remove('hide__text');
            checkedSel.parentElement.parentElement.removeAttribute('data-show');
    
            checkedSel.parentElement.style.border = '';
        }
        closeBtn.addEventListener('click', closeDialog, false);
    };
    
    
    const checkselect = Array.from(document.querySelectorAll('.checkselect'));
    const closeBtn = Array.from(document.querySelectorAll('.input-reset'));
    const applyBtn = Array.from(document.querySelectorAll('.apply'));
    // открыть чекбоксы
    /*********************close to un enabled */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.checkselect')) {
            document.querySelectorAll('.checkselect').forEach(select => {
                select.classList.remove('open');
                //   e.stopPropagation();
            });
        }
        e.stopPropagation();
    });
    
    checkselect.map((e, i) => {
    
        e.addEventListener('click', function () {
            this.classList.toggle('open');
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
    
                if (el.target === checkselect[i] || el.target === applyBtn[i] || el.target.closest('.checkselect') === null) {
                    closeBtn[i].classList.add('hide');
                    applyBtn[i].classList.add('hide');
                    applyBtn[i].classList.remove('show')
                    checkselect[i].classList.remove('open');
                    checkselect[i].style.display = 'none';
                }
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
    
    
    