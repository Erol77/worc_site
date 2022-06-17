class Pag {
    constructor(data) {
        // this.Init = Init,
        // data = data || {},
        this.size = data.size || 10;
        this.page = data.page || 1;
        this.step = data.step || 3;
        this.code = '';
        this.text = data.text;
        this.Init = this.Init.bind(this);
        this.Click = this.Click.bind(this);
        this.Prev = this.Prev.bind(this);
        this.Next = this.Next.bind(this);
        this.Start = this.Start.bind(this),
            this.Bind = this.Bind.bind(this);
        // this.Finish = this.Finish.bind(this),
        // this.Buttons = this.Buttons.bind(this);
        // this.Create = this.Create.bind(this);
        this.Go = this.Go.bind(this);
        // this.Add = this.Add.bind(this);
        // this.elem = data.elem;
        // this.onclick = this.onClick.bind(this); // (*)

    }
    // --------------------
    // Utility
    // --------------------

    // add pages by number (from [s] to [f])
    Add(s, f) {
        // if (this.text.length > 0)
        for (var i = s; i < f; i++) {
            this.code += '<i class="hide">' + i + '</i>';
            this.code += `<div class="modal__comments-item hide"  data-element=${i}>` + this.text[i - 1] + '</div>';
        }
    }

    // add last page with separator
    Last() {
        this.code += '<i>...</i><a>' + this.size + '</a>';
    }

    // add first page with separator
    First() {
        this.code += `<button class="pagination__button pagination__btn--left pagination__button--disabled" data-page="false" >
        <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
            <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
            </path>
        </svg>
    </button>`;
    }



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click(e) {
        // console.log(this);
        this.page = +e.target.innerHTML;
        e.stopPropagation();
        this.Start();
    }
    Number(e) {
        this.e.textContent = this.page;
    }
    // previous page
    Prev() {
        this.page--;
        if (this.page < 1) {
            this.page = 1;
            // e.className = 'pagination__button--disabled';
        }
        this.Start();
    }

    // next page
    Next() {
        this.page++;
        if (this.page > this.size) {
            this.page = this.size;
        }
        this.Start();
    }
    Go() {
        this.page = +this.page;
        this.Start();
    }


    // --------------------
    // Script
    // --------------------.modal__comments-btn-left  .modal__comments-btn-right

    // binding pages
    Bind() {
        var a = [...this.e.querySelectorAll('i')];
var spanText = [...this.textElem.querySelectorAll('span')];
        var text = [...this.e.querySelectorAll('.modal__comments-item')];
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === this.page) { //a[i].style.display = 'block';
                a[i].className = 'show';
                text[i].className = 'modal__comments-item show';
                spanText[1] = +a[i].innerHTML;
console.log('bind')
            }
            // a[i].addEventListener('click', this.Click, false);
            // text[i].addEventListener('click', this.Click, false);
        }
}

    // write pagination
    Finish() {
        this.e.innerHTML = this.code;
        this.code = '';
        this.Bind();
    }

    // find pagination type
    Start() {
        if (this.size < this.step * 2 + 6) {
            this.Add(1, this.size + 1);
        } else if (this.page < this.step * 2 + 1) {
            this.Add(1, this.step * 2 + 4);
            this.Last();
        } else if (this.page > this.size - this.step * 2) {
            this.First();
            this.Add(this.size - this.step * 2 - 2, this.size + 1);
        } else {
            this.First();
            this.Add(this.page - this.step, this.page + this.step + 1);
            this.Last();
        }
this.Number();
        this.Finish();
    }
    // Initialization
    // binding buttons
    Buttons(e) {
        let navLeft = [...e.querySelectorAll('.pagination__btn--left')],
            navRight = [...e.querySelectorAll('.pagination__btn--next')],
            goto = e.querySelector('.pagination__button--goto'),
            inputGoto = e.querySelector('.pagination__item');
        navLeft.map(i => {
            i.addEventListener('click', this.Prev, false);
        });
        navRight.map(i => {
            i.addEventListener('click', this.Next, false);
        });
        inputGoto.addEventListener('input', () => {
            this.page = inputGoto.value
        }, false);
        goto.addEventListener('click', this.Go, false);
        // var nav = e.getElementsByTagName('a');
        // nav[0].addEventListener('click', this.Prev, false);
        // nav[1].addEventListener('click', this.Next, false);
    }
    // create skeleton
    Create(e) {

        var html = [
            '<div class="modal__comments-list">',
            '<span></span>',
            `<button class="modal__comments-btn-left pagination__btn--left">
                        <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                            <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
                            </path>
                        </svg></button>
                    <button  class="modal__comments-btn-right pagination__btn--next">
                        <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                            <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                            </path>
                        </svg>
                    </button>
<div class="pagination">
 <button class="pagination__button pagination__btn--left pagination__button--disabled" data-page="false" >
                            <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                                <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
                                </path>
                            </svg>
                        </button>
                        <button class="pagination__button pagination__btn--next" data-page="false" data-event-action="click: pagination-previous">
                            <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                                <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                                </path>
                            </svg>
                        </button>
 <p class="modal__pagination-list"><span>1</span>из ${this.size}</p>
    <button class="pagination__button pagination__button--next pagination__button--available" data-event-action="click: pagination-next">
                            <svg viewBox="0 0 9.14 18" width="0" height="0" class="arrow-icon ">
                                <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                                </path>
                            </svg>
                        </button>
                    <div class="pagination__goto" >
                        <p class="pagination__title">перейти на страницу</p>
                        <input type="text"  name="goto" class="pagination__item" value="${this.size}">

                        <button class = "pagination__button pagination__button--goto"
                        data-page="false"
                        data-event-action="click: pagination-goTo" >
                            OK
                        </button>
                    </div></div>
`,
            //'<a>&#9668;</a>', // previous button
            // '<span></span>', // pagination container
            // '<a>&#9658;</a>', // next button
            '</div>'
        ];
        e.innerHTML = html.join('');
        this.e = e.getElementsByTagName('span')[0];
        this.Buttons(e);
        this.textElem = e.getElementsByTagName('span')[1];
        // this.Number(e);
    }
   
    // init
    Init(e, text) {
        this.Create(e, text);
        this.Start();
    }
}