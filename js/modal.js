window.addEventListener('DOMContentLoaded', () => {
  const btn = [...document.querySelectorAll('[data-modal]')],
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')
  btnEdit = [...document.querySelectorAll('.add_comments_link')];

  // var initPagination = function (select, size = 3) {
  //   Pagination.Init(document.getElementById(select), {
  //     size
  //   });
  // };

  let text = {},
    number = 0;


  let data = {
    btnEdit, //.parentElement.parentElement.parentElement.textContent
    btn
  }


  // btnEdit.map((item, index) => {
  //   item.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     openModal();
  //     modal.querySelector(".modal__comments").innerHTML = '';
  //     document.querySelector("textarea").textContent = item.parentElement.querySelector('.comments-text').textContent.trim();
  //     document.querySelector("textarea").focus();
  //     modal.setAttribute('data-edits', index);
  //   })
  // })



  function openModal() {
    document.querySelector("textarea").textContent = '';
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);

  }

  btn.forEach((item, index) => {
    number = index;
    // console.log(item.querySelector('.add_comments_link'))
    // if(item)  || item.querySelector('.add_comments_link').textContent === 'Редактировать'

    const dateCreate = item.querySelectorAll('.comments-date') ? Array.from(item.querySelectorAll('.comments-date')): ''; /**************** */
    const dateText = item.querySelectorAll('.comments-text') ? Array.from(item.querySelectorAll('.comments-text')): '';
    let content = Array.from(item.querySelectorAll('.link_table'));
   

    content.map((j, dateCreate, dateText) => j.addEventListener('click', () => {
   console.log(dateText + '   ' + number + '   ' + dateCreate);
      modal.querySelector(".modal__comments").innerHTML = '';
      if (dateCreate.length > 0) {
        // [...item.querySelectorAll('.comments-date')].map(i => (i) => {
        // const element = document.createElement('div');
        // element.classList.add('modal__comments-list');
        for (let i = 0; i < dateCreate.length; i++) {
          text[i] = `<p class="modal__comments-date">${dateCreate[i].textContent}</p><button class="btn btn__edit" onmouseover="toolTip('Редактировать')" onmouseout="toolTip()"data-text="Редактировать"data-edit></button><button class="btn btn__delete"onmouseover="toolTip('Удалить')" onmouseout="toolTip()"data-text="Удалить" data-delete><!--<i class="icon__delete"></i>--></button><p class="modal__comments-text">${dateText[i].textContent}</p>`;

          // if (i + 1 < dateCreate.length) {
          //   element.innerHTML += '<hr>';
          // }
        }
      } // console.log(text);
    }))

    item.addEventListener('click', (e, dateCreate, dateText, content) => {
      e.preventDefault();
      if (e.target.textContent === 'Добавить ещё комментарий') {

        console.log(dateText + '   ' + number + '   ' + dateCreate);

        // let content = Array.from(e.target.parentElement.querySelectorAll('.link_table'));


        openModal();
        const user = new Pag({
          size: dateCreate.length, // pages size
          page: 1, // selected page
          step: 3, // pages before and after current
          text: text
        });
        modal.setAttribute('data-index', index)
        document.querySelector("textarea").focus();
        user.Init(document.getElementById('pag'));



      }
    })


    // if (item.querySelector('.link_table').textContent === 'Добавить комментарий') {
    //   item.querySelector('.link_table').addEventListener('click', () => {
    //     openModal();
    //     modal.setAttribute('data-index', index);
    //     modal.querySelector(".modal__comments").innerHTML = '';
    //     document.querySelector("textarea").focus();
    //   })
    // }

  });

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
    // modal.querySelector(".modal__comments").innerHTML = '';
    setTimeout(() => document.querySelector('#comments').textContent = '', 1000);

  }

  modal.addEventListener('click', (e) => {
    // console.log(e.target.type);
    if (e.target === modal || e.target === modalCloseBtn || e.target.type === 'reset') { //e.target.getAttribute('.data-close') == ''
      closeModal();
    }
    if (e.target.type === 'submit') { //e.target.getAttribute('.data-close') == ''
      e.preventDefault();


      const message = document.createElement('div');
      message.classList.add('add_comments_wrap');
      message.innerHTML = `          <div class="add_comments">
                                        <p class="comments-date">${new Date().toLocaleString()}</p>
                                        <p class="comments-text">${document.querySelector('#comments').value}</p>
                                        <a href="#" class="add_comments_link" data-text="Редактировать"></a>
                              </div>
                                    <a href="#" class="link_table">Добавить ещё комментарий</a>
                                `;
      message.querySelector('.add_comments_link');
      if (modal.hasAttribute('data-index')) {
        let numberPost = modal.getAttribute('data-index');
        console.log(numberPost);
        btn[numberPost].append(message);
        modal.removeAttribute('data-index');
      } else if (modal.hasAttribute('data-edit')) {
        let numberPost = modal.getAttribute('data-edits');


        btnEdit[numberPost].parentElement.replaceWith(message)
        modal.removeAttribute('data-edits');
      }
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 150000);

  // function showModalScroll() {
  //   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  //     openModal();
  //     window.removeEventListener('scroll', showModalScroll);
  //   }
  // }
  // window.addEventListener('scroll', showModalScroll);

});
/*
<input type="text"> length: <span id="length">0</span>
<script>
  var text = document.querySelector("input");
  var output = document.querySelector("#length");
  text.addEventListener("input", function() {
    output.textContent = text.value.length;
  });
</script>*/