window.addEventListener('DOMContentLoaded', () => {
  const dataUser = document.querySelector('#data-user'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');
modalSubmit = document.querySelector('.btn-warning');
 let textarea = document.getElementById('comments');

  const configUser = {
    attributes: true,
    childList: true,
    subtree: true
    // attributeFilter: ['data-index', 'data-delete', 'data-edit','data-modal']
  };
  const callbackUser = function (mutationsList) {
    for (let mutation of mutationsList) {
      // if (mutation.type === 'childList') {
      //   modalUser()//          console.log('A child node has been added or removed.');
      // }
      // console.log('A mutation.  ' + mutation);
      modalUser();
    }
  };
  const observerUser = new MutationObserver(callbackUser);
  observerUser.observe(dataUser, configUser);

  function openModal() {
    // textarea.innerHTML = '';
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
    // modal.querySelector(".modal__comments").innerHTML = '';
    setTimeout(() => textarea.value = '', 10);
  }

  const btn = [...document.querySelectorAll('[data-modal]')];

  function modalUser() {
   
    


    btn.forEach((item, index) => {
      let text = {},
        number = 0;
      number = index;
      const dateCreate = item.querySelectorAll('.comments-date') ? Array.from(btn[index].querySelectorAll('.comments-date')) : ''; /**************** */
      const dateText = item.querySelectorAll('.comments-text') ? Array.from(btn[index].querySelectorAll('.comments-text')) : '';
      let content = Array.from(item.querySelectorAll('.link_table'));

      for (let i = 0; i < dateCreate.length; i++) {
        text[i] = `<p class="modal__comments-date">${dateCreate[i].textContent}</p><button class="btn btn__edit" onmouseover="toolTip('Редактировать')" onmouseout="toolTip()"data-text="Редактировать" data-action="edit" data-edit></button><button class="btn btn__delete"onmouseover="toolTip('Удалить')" onmouseout="toolTip()"data-text="Удалить" data-action="deletePost"><!--<i class="icon__delete"></i>--></button><p class="modal__comments-text">${dateText[i].textContent}</p>`;
        // if (i + 1 < dateCreate.length) {
        //   element.innerHTML += '<hr>';
        // }
      }

      item.addEventListener('click', (e) => {
        // e.preventDefault();
        if (e.target.textContent === 'Добавить ещё комментарий' || e.target.closest('.link_table') || e.target.getAttribute('data-text') === 'Редактировать') {
          openModal();
          modal.setAttribute('data-index', index)
          const user = new Pag({
            page: 1, // selected page
            step: 3, // pages before and after current
            size: dateCreate.length, // pages size
            text,
            elem: pag
          });
          //  if (dateCreate.length) {
          user.Init(document.getElementById('pag'), {
            text
          });

          // }
          if (e.target.getAttribute('data-text') === 'Редактировать') {
            modal.setAttribute('data-edits', e.target.dataset.edit); //modal__label-comments Добавить свой комментарий
            modal.querySelector('.modal__label-comments').textContent = 'Редактировать свой комментарий';
            textarea.value = item.parentElement.querySelector('.comments-text').textContent.trim();
          }
          if (e.target.textContent === 'Добавить комментарий') {
            modal.setAttribute('data-newcomment', 'new-comment');
            modal.querySelector('.modal__label-comments').textContent = 'Добавить свой комментарий';
            document.getElementById('pag').value = '';
            textarea.textContent = '';
          } else if (e.target.textContent === 'Добавить ещё комментарий') {
            modal.setAttribute('data-addcomment', dateCreate.length);
            modal.querySelector('.modal__label-comments').textContent = 'Добавить свой комментарий';
            textarea.value = '';
          }
          textarea.focus();
        }
      })
    });


    modalSubmit.addEventListener('click', (e) => {
    let numberPost = modal.getAttribute('data-index');
      const message = document.createElement('div');
      message.classList.add('add_comments_wrap');
      message.innerHTML = `          <div class="add_comments">
                                        <p class="comments-date">${new Date().toLocaleString()}</p>
                                        <p class="comments-text">${textarea.value}</p>
                                        <a href="#" class="add_comments_link" data-edit="0" data-text="Редактировать"></a>
                              </div>
                                    <a href="#" class="link_table">Добавить ещё комментарий</a>
                                `;
      message.querySelector('.add_comments_link');
      if (modal.hasAttribute('data-newcomment')) {
    
        // console.log(numberPost);
        btn[numberPost].innerHTML = '';
        // btn[numberPost].innerHTML = message;
        btn[numberPost].append(message);
        modal.removeAttribute('data-index');
        modal.removeAttribute('data-newcomment');
      }
      if (modal.hasAttribute('data-addcomment')) {
        // console.log(numberPost);
        btn[numberPost].append(message);
        modal.removeAttribute('data-index');
        modal.removeAttribute('data-addcomment');
      }
      if (modal.hasAttribute('data-edits')) {
        let numberComment = modal.getAttribute('data-edits');

        // let mess = [`<p class="comments-date">${new Date().toLocaleString()}</p>`, `<p class="comments-text">${document.querySelector('#comments').value}</p>`,
        //   `<a href="#" class="add_comments_link" data-edit="${numberComment}" data-text="Редактировать"></a>`
        // ]
        // message.innerHTML = mess.join('');

        // btn[numberPost].querySelector(`[data-edit="${numberComment}"]`).replaceWith(message) .add_comments_wrap
        let dateAdd = btn[numberPost].querySelectorAll(`.add_comments_wrap`)[numberComment];
        dateAdd.querySelector('.comments-date').textContent = new Date().toLocaleString();
        dateAdd.querySelector('.comments-text').textContent = textarea.value;

        modal.removeAttribute('data-edits');
        modal.removeAttribute('data-index');
      }
      closeModal();

    })
    modal.addEventListener('click', (e) => {
      // console.log(e.target.type);
      if (e.target === modal || e.target === modalCloseBtn) { //e.target.getAttribute('.data-close') == ''
        closeModal(); //|| e.target.type === 'reset'
      }

      //if (e.target.type === 'submit') { //e.target.getAttribute('.data-close') == ''
      if (e.target.dataset.action === 'edit') {
        console.log('edit -' + modal.querySelector('.modal__comments-item.show .modal__comments-text'))
        textarea.innerHTML = modal.querySelector('.modal__comments-item.show .modal__comments-text').innerHTML
      }

      if (e.target.dataset.action === 'deletePost') {
        console.log('deletePost')
        modal.querySelector('.modal__comments-item.show .modal__comments-text').innerHTML = ''
      }

      // addNote();
      // const textControl = new Pag()
      //       textControl.onClick(e)
      e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }
  modalUser();
});