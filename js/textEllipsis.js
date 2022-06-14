document.addEventListener('DOMContentLoaded', () => {
    function overflow(e) {
        return e.scrollWidth > e.offsetWidth || e.scrollHeight > e.offsetHeight;
    }

    function addTextDecoration(selector) {
        const text = Array.from(document.querySelectorAll(selector));
        text.forEach(i => {
            if (overflow(i.parentElement)) {
                console.log('wrong ' + i.textContent)
                i.parentElement.classList.add('hide__text');
                i.parentElement.setAttribute('data-show','text')
            } else {
                if (i.classList.contains('hide__text')) { i.parentElement.classList.remove('hide__text') 
                i.parentElement.removeAttribute('data-show')
            }
                // console.log('delete ty class its okkey ' + i)
            }
        });

    }
    // addTextDecoration('.select__toggle span');
    addTextDecoration('.table_fio span');
    addTextDecoration('.form-control option');
    addTextDecoration('.table_body_item-type span');
    addTextDecoration('.table_phone span');

    
    document.addEventListener('click', () => {
        // addTextDecoration('.select__toggle');
        addTextDecoration('.form-control');
    })

})