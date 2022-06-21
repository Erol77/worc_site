  //select=Array.from(document.querySelector('.form-control')); select.map(i=>console.log(i.value))
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
                closeBtn.style.right = -15 + 'px';
                closeBtn.classList.remove('hide');
            }

            checkedSel.parentElement.style.backgroundColor = '#fbf7e7';
            checkedSel.parentElement.style.borderRadius = '5px';
            checkedSel.parentElement.style.border = '1px solid #e3dcb2'; //border-right-width: 1px;
            checked.style.width =checked.style.width-25 +'px';
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
            // checked.style.width = 100 + '%';
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


