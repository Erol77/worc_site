/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * 

var Pagination = {
    code: '',   
    // Utility
    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 5;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },
    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },
    // Handlers
/**********************
    // change page
    Click: function(e) {
        Pagination.page = + e;//+this.innerHTML;/***************************
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },

    // Script

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },
    // Initialization

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');/**************** .modal__comments-btn-left  .modal__comments-btn-right
      //   nav[0].addEventListener('click', Pagination.Prev, false);
      //   nav[1].addEventListener('click', Pagination.Next, false);
        [...e.querySelectorAll('.modal__comments-btn-left')].map(i=>i.addEventListener('click', Pagination.Prev, false));
        e.querySelector('.modal__comments-btn-right').addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a class=".modal__comments-btn-left">&#9668;</a>', // previous button .modal__comments-btn-left  .modal__comments-btn-right
            '<span></span>',  // pagination container
            '<a class="modal__comments-btn-right">&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};
Initialization*/
// var initPagination = function() {
//     Pagination.Init(document.getElementById('pagination'), {size: 30});
// };
// document.addEventListener('DOMContentLoaded', init, false);


class Pag {
    constructor(data) {
        // this.Init = Init,
        data = data || {},
            this.size = data.size || 10;
            this.page = data.page || 1;
            this.step = data.step || 3;
            this.code = '';
this.text=data.text || '';


            // let boundFunc = func.bind(context);

            this.Init = this.Init.bind(this);
            this.Click = this.Click.bind(this);
            this.Prev = this.Prev.bind(this);
            this.Next = this.Next.bind(this);
            // this.Start = this.Start.bind(this),
            this.Bind = this.Bind.bind(this);
            // this.Extend = this.Extend.bind(this);
            // this.Finish = this.Finish.bind(this),
            this.Buttons = this.Buttons.bind(this);
            this.Create = this.Create.bind(this);
            // this.Add = this.Add.bind(this);

    }
    // --------------------
    // Utility
    // --------------------


    // converting initialize data
    // Extend(data) {
    //     data = data || {};
    //     this.size = data.size || 300;
    //     this.page = data.page || 1;
    //     this.step = data.step || 3;
    // }

    // add pages by number (from [s] to [f])
    Add(s, f) {
// if (this.text.length > 0)
        for (var i = s; i < f; i++) {
            // this.code += '<a>' + i + '</a>';
 this.code += `<div class="modal__comments-item" style="display:none" data-element=${i}>` + this.text[i] + '</div>';
        }
    }

    // add last page with separator
    Last() {
        this.code += '<i>...</i><a>' + this.size + '</a>';
    }

    // add first page with separator
    First() {
        this.code += '<a>1</a><i>...</i>';
    }



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click() {
        console.log(this);
        this.page = +this.innerHTML;
        this.Start();
    }

    // previous page
    Prev() {
        this.page--;
        if (this.page < 1) {
            this.page = 1;
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
Go(){
 this.page = +this.page;
 this.Start();
}


    // --------------------
    // Script
    // --------------------.modal__comments-btn-left  .modal__comments-btn-right

    // binding pages
    Bind() {
        var a =[...this.e.querySelectorAll('.modal__comments-item')];
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === this.page) {a[i].style.display = 'block';
            a[i].className = 'show';}
            a[i].addEventListener('click', this.Click, false);
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
        this.Finish();
    }



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons(e) {
let navLeft =[...e.querySelectorAll('.pagination__btn--left')],
navRight = [...e.querySelectorAll('.pagination__btn--next')],
goto = e.querySelector('.pagination__button--goto'),
inputGoto = e.querySelector('.pagination__item');
navLeft.map(i=>{i.addEventListener('click', this.Prev, false);});
navRight.map(i=>{i.addEventListener('click',this.Next, false);});
inputGoto.addEventListener('input', this.page = inputGoto.value);
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
 <p class="modal__pagination-list">1 из ${this.size}</p>
    <button class="pagination__button pagination__button--next pagination__button--available" data-event-action="click: pagination-next">
                            <svg viewBox="0 0 9.14 18" width="0" height="0" class="arrow-icon ">
                                <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                                </path>
                            </svg>
                        </button>
                    <div class="pagination__goto" >
                        <p class="pagination__title">перейти на страницу</p>
                        <input type="text" class="pagination__item" value="${this.size}">

                        <button class = "pagination__button pagination__button--goto"
                        data-page="false"
                        data-event-action="click: pagination-goTo" >
                            OK
                        </button>
                    </div></div>
`,
            '<a>&#9668;</a>', // previous button
           // '<span></span>', // pagination container
            '<a>&#9658;</a>', // next button
'</div>'
        ];

        e.innerHTML = html.join('');
        this.e = e.getElementsByTagName('span')[0];
        this.Buttons(e);
    }

    // init
    Init(e,text) {
        // this.Extend(data);
        this.Create(e,text);
        this.Start();
    }
}