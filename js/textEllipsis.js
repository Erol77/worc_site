document.addEventListener('DOMContentLoaded', () => {
    function overflow(e) {
        return e.scrollWidth > e.offsetWidth || e.scrollHeight > e.offsetHeight;
    }

    function addTextDecoration(selector) {
        const text = Array.from(document.querySelectorAll(selector));

        text.map(i => {
            if (i.scrollWidth > i.offsetWidth) {
                i.classList.add('hide__text');
                i.setAttribute('data-show', 'text');
                i.setAttribute('onmouseover', `toolTip('${i.textContent.trim()}')`);
                i.setAttribute('onmouseout', `toolTip()`);
            } else {
                if (i.classList.contains('hide__text')) {
                    i.classList.remove('hide__text')
                    i.removeAttribute('data-show');
                    i.removeAttribute('onmouseover');
                    i.removeAttribute('onmouseout');
                }
            }
        });

    }

    function addTextDecorationSelect(selector) {
        const text = Array.from(document.querySelectorAll(selector));

        text.map(i => {
            if (i.scrollWidth > i.offsetWidth) {
                i.classList.add('hide__text');
                i.parentElement.setAttribute('onmouseover', `toolTip('${i.textContent.trim()}')`);
                i.parentElement.setAttribute('onmouseout', `toolTip()`);
            } else {
                if (i.classList.contains('hide__text')) {
                    i.classList.remove('hide__text');
                    i.parentElement.removeAttribute('onmouseover');
                }
            }
        })
    };

    addTextDecoration('.table_fio');
    addTextDecoration('.table_body_item-type');
    addTextDecoration('.table_body_item a.table_phone');
    /*
        document.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, '   ' + e.offsetY + '   ' + e.target.getAttribute('data-text'));
    // if (e.target.hasAttribute('data-show')){
    if (e.target.classList.contains('.table_fio')) {
           tooltip.classList.toggle('hide');
    tooltip.innerHTML ='';
    tooltip.innerHTML = e.target.getAttribute('data-text') + '<div class="tooltip-arrow toptobottom center "></div>';
            // addTextDecoration('.form-control'); .table_fio
    }else{
    setTimeout(tooltip.classList.toggle('hide'),1000)
    }
        })*/

    document.addEventListener('click', () => {
        addTextDecorationSelect('.select__toggle');
        // addTextDecoration('.form-control');
    })
})
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

document.onmousemove = moveTip;
function moveTip(e) {
    floatTipStyle = document.getElementById("tooltip").style;
    w = 250; // Ширина слоя    // Для браузера IE
    if (document.all) {
        x = event.x + document.body.scrollLeft;
        y = event.y + document.body.scrollTop;        // Для остальных браузеров
    } else {
        x = e.pageX; // Координата X курсора
        y = e.pageY; // Координата Y курсора
    }
    // Показывать слой справа от курсора 
    if ((x + w + 10) < document.body.clientWidth) {
        floatTipStyle.left = x - 50 + 'px';        // Показывать слой слева от курсора
        floatTipStyle.arrow = 'left';
    } else {
        floatTipStyle.left = x - w + 'px';
        floatTipStyle.arrow = 'center';
    }    // Положение от верхнего края окна браузера righttoleft
    // let c = getCoords(e.target),
    // center= c.left+c.right/c.left;
    // floatTipStyle.left = center+'px';
    // console.log(c.top+'top  '+center);
    floatTipStyle.top = y - 80 + 'px';
}

function toolTip(msg) {
    floatTipStyle = document.getElementById("tooltip").style;
    if (msg) {
        document.getElementById("tooltip").innerHTML = msg + '<div class="tooltip-arrow toptobottom ' + floatTipStyle.arrow + ' "></div>';
        floatTipStyle.display = "block";
    } else {
        floatTipStyle.display = "none"; //  floatTip
    }
}