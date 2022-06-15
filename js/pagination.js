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
            this.size = data.size || 300,
            this.page = data.page || 1,
            this.step = data.step || 3,
            this.code = '',


            // let boundFunc = func.bind(context);

            this.Init = this.Init.bind(this),
            this.Click = this.Click.bind(this),
            this.Prev = this.Prev.bind(this),
            this.Next = this.Next.bind(this),
            // this.Start = this.Start.bind(this),
            this.Bind = this.Bind.bind(this),
            this.Extend = this.Extend.bind(this),
            // this.Finish = this.Finish.bind(this),
            this.Buttons = this.Buttons.bind(this),
            this.Create = this.Create.bind(this),
            this.Add = this.Add.bind(this)

    }
    // --------------------
    // Utility
    // --------------------


    // converting initialize data
    Extend(data) {
        data = data || {};
        this.size = data.size || 300;
        this.page = data.page || 1;
        this.step = data.step || 3;
    }

    // add pages by number (from [s] to [f])
    Add(s, f) {
        for (var i = s; i < f; i++) {
            this.code += '<a>' + i + '</a>';
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



    // --------------------
    // Script
    // --------------------.modal__comments-btn-left  .modal__comments-btn-right

    // binding pages
    Bind() {
        var a = this.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === this.page) a[i].className = 'current';
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
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', this.Prev, false);
        nav[1].addEventListener('click', this.Next, false);
    }

    // create skeleton
    Create(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>', // pagination container
            '<a>&#9658;</a>' // next button
        ];

        e.innerHTML = html.join('');
        this.e = e.getElementsByTagName('span')[0];
        this.Buttons(e);
    }

    // init
    Init(e, data) {
        this.Extend(data);
        this.Create(e);
        this.Start();
    }
}