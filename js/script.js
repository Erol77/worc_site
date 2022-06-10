document.addEventListener('DOMContentLoaded', () => {

    if (window.Element && !Element.prototype.closestMy) {
        Element.prototype.closestMy =
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i,
                    el = this;
                do {
                    i = matches.length;
                    while (--i >= 0 && matches.item(i) !== el) {};
                } while ((i < 0) && (el = el.parentElement));
                return el;
            };
    }

    const burger = document.querySelector('.burger');
    const navBlock = document.querySelector('.nav_block');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        navBlock.slideToggle();
    })

    const checkselect = Array.from(document.querySelectorAll('.checkselect'));
           const closeBtn = Array.from(document.querySelectorAll('.input-reset'));
        const applyBtn = Array.from(document.querySelectorAll('.apply'));
    // открыть чекбоксы
    checkselect.map((e,i) => {

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
                applyBtn[i].classList.add('hide');applyBtn[i].classList.remove('show')
                checkselect[i].classList.remove('open');
                checkselect[i].style.display = 'none';
            }
// if (e.target.closest('.popup') === null) {
//     popup.style.display = 'none';
// }

            }
// if (!el[i].target !== checkselect[i] && checkselect[i].classList.contains('open')) { //&& checkselect.classList.contains('open')
// closeBtn[i].classList.add('hide');
// applyBtn[i].classList.add('hide');
// applyBtn[i].classList.remove('show')
// checkselect[i].classList.remove('open');
// };mouseup  .replace('hide', 'show');
 
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



    //открыть селекты

    const selectDropdown = Array.from(document.querySelectorAll('.jq-selectbox'));
    // const navBlock = document.querySelector('.nav_block');
    selectDropdown.map((e, i) => e.addEventListener('click', function (el) {
        if (el.target === selectDropdown[i] && selectDropdown[i].classList.contains('opened')){
         selectDropdown[i].style = "display: inline-block; position: relative; z-index: 0;";
         selectDropdown[i].classList.toggle('opened');
         selectDropdown[i].querySelector('.jq-selectbox__dropdown').style = "position: absolute; display: none;";
         selectDropdown[i].querySelector('ul').style = "position: relative; list-style: none; overflow: auto; overflow-x: hidden";


}else{
            selectDropdown[i].style = "display: inline-block; position: relative; z-index: 100;";
                    selectDropdown[i].classList.toggle('opened');
            selectDropdown[i].querySelector('.jq-selectbox__dropdown').style="position: absolute; height: auto; bottom: auto; top: 30px; ";
            selectDropdown[i].querySelector('ul').style="position: relative; list-style: none; overflow: hidden auto; max-height: 312px;";
}
    }));

document.addEventListener('click', (e) => {
    if (!e.target.closest('.jq-selectbox')) {
        document.querySelector('.jq - selectbox .opened').forEach(select => {
            select.classList.remove('opened');

        });
    }
});


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


    xCal('datepicker1', {
        id: "date1",
        hide: 0,
        x: 0,
        autoOff: 0,
        now: 0,
        to: "datepicker1"
    });
    xCal('datepicker2', {
        id: "date2",
        hide: 0,
        x: 0,
        autoOff: 0,
        to: "datepicker2"
    });

    const datePiker = document.querySelector('.datepicker_row');
    datePiker.addEventListener('click', function () {
        datePiker.querySelector(".datepicker_windows").style.display = 'block';

        datePiker.querySelector(".datepicker_windows").addEventListener('mouseout', function () {
            datePiker.querySelector(".datepicker_windows").style.display = 'none';
        });

    });

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
});

   