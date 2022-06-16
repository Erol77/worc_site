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
  const user = new Pag();
let text={};

  let data = {
    btnEdit, //.parentElement.parentElement.parentElement.textContent
    btn
  }
  console.log(data);

  btnEdit.map((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
      modal.querySelector(".modal__comments").innerHTML = '';
      document.querySelector("textarea").textContent = item.parentElement.querySelector('.comments-text').textContent.trim();
      document.querySelector("textarea").focus();
      modal.setAttribute('data-edits', index);
    })
  })



  function openModal() {
    document.querySelector("textarea").textContent = '';
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);

  }

  btn.forEach((item, index) => {
    // console.log(item.querySelector('.add_comments_link'))
    // if(item)  || item.querySelector('.add_comments_link').textContent === 'Редактировать'

    //console.log(item.querySelector('.link_table').textContent);

    if (item.querySelector('.link_table').textContent === 'Добавить ещё комментарий') {
      // console.log(index);
      let content = Array.from(item.querySelectorAll('.link_table'));
      content.map(j => j.addEventListener('click', () => {
        // item.preventDefault();
        const dateCreate = item.querySelectorAll('.comments-date');
        const dateText = item.querySelectorAll('.comments-text');
        modal.querySelector(".modal__comments").innerHTML = '';
        if (dateCreate.length > 0) {
          // [...item.querySelectorAll('.comments-date')].map(i => (i) => {
          // const element = document.createElement('div');
          // element.classList.add('modal__comments-list');
          for (let i = 0; i < dateCreate.length; i++) {

            // element.innerHTML +
            text[i] = `<p class="modal__comments-date">${dateCreate[i].textContent}</p><button class="btn btn__edit" data-text="Редактировать"data-edit></button><button class="btn btn__delete"data-text="Удалить" data-delete><!--<i class="icon__delete"></i>--></button><p class="modal__comments-text">${dateText[i].textContent}</p>`;

            // if (i + 1 < dateCreate.length) {
            //   element.innerHTML += '<hr>';
            // }
          }

          // <button class="modal__comments-btn-left">
          //     <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
          //         <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
          //         </path>
          //     </svg></button>
          // <button class="modal__comments-btn-right">
          //     <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
          //         <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
          //         </path>
          //     </svg>
          // </button>


          // element.innerHTML += `                    
          //           <div class="pagination" id="pag"></div>                               
          //      `; 
          // modal.querySelector('.modal__comments').append(element); //querySelector('.modal__comments-list')
          //  });
        }
          console.log(text);
        openModal();
        // initPagination('pag', dateCreate.length);
        modal.setAttribute('data-index', index)
        document.querySelector("textarea").focus();
        user.Init(document.getElementById('pag'), {
          size: dateCreate.length, // pages size
          page: 1, // selected page
          step: 3, // pages before and after current
          text:''
        });
        // document.querySelector('.pagination__goto').addEventListener('click', (e) => {
          // console.log(e.target)
          // Pagination.Click()
        // })

      }))
    }

    if (item.querySelector('.link_table').textContent === 'Добавить комментарий') {
      item.querySelector('.link_table').addEventListener('click', () => {
        openModal();
        modal.setAttribute('data-index', index);
        modal.querySelector(".modal__comments").innerHTML = '';
        document.querySelector("textarea").focus();
      })
    }

  });

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
    modal.querySelector(".modal__comments").innerHTML = '';
    setTimeout(() => document.querySelector('#comments').textContent = '', 1000);

  }

  modal.addEventListener('click', (e) => {
    // console.log(e.target.type);
    if (e.target === modal || e.target === modalCloseBtn || e.target.type === 'submit' || e.target.type === 'reset') { //e.target.getAttribute('.data-close') == ''
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