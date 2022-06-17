window.addEventListener('DOMContentLoaded', () => {
  const dataUser = document.querySelector('#data-user'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');
    let textarea=document.getElementById('comments');

    let db;
    // (      async()=>{
    //     db=await IDBCursor.openDb('db',1,db=>{
    //       db.createObjectStore('notes',{
    //         keyPath:'id'
    //       })
    //     })
    //     createList()
    //   })();
// const addNote= async()=>{
// let tex = textarea.value

//       let note = {
//         id,
//         text,
//         createDate: new Date().toLocaleDateString(),
//         completed:''
//       }

//       try{
//         await db.transaction('notes','readwrite')
//         .objectStore('notes')
//         .add(note)
//         await createList()
//         .then(()=>{
//           textarea.value=''
//           dateInput.value=''
//         } )
//       }catch{console.log('not add db')}
//     }
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
      console.log('A mutation.  '+mutation);
      // modalUser();
    }
  };
  const observerUser = new MutationObserver(callbackUser);
  observerUser.observe(dataUser, configUser);

  // const config = {
  //   attributes: true,
  //   childList: true,
  //   // subtree: true,
  //   attributeFilter: ['class']//['data-index', 'data-delete', 'data-edit', 'data-modal']
  // };

  // const callback = function (mutationsList, observer) {
  //   for (let mutation of mutationsList) {
  //     // if (mutation.type === 'childList') {
  //     //     console.log('A child node has been added or removed.');
  //     // } else if (mutation.type === 'attributes') {
  //     //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
  //     // }
  //     let mt = 'Тип изменения ' + mutation.type;
  //     mt += "Измененный элемент " + mutation.target;
  //     console.log('The ' + mt + ' attribute was modified.' + observer);
  //   }
  // };
  // const observer = new MutationObserver(callback);
  // observer.observe(document.documentElement, config);

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
    setTimeout(() =>textarea.innerHTML = '', 1000);
  }

  const btn = [...document.querySelectorAll('[data-modal]')];

  function modalUser() {
    let text = {}, number = 0;
    btn.forEach((item, index) => {
      number = index;
      const dateCreate = item.querySelectorAll('.comments-date') ? Array.from(btn[index].querySelectorAll('.comments-date')) : ''; /**************** */
      const dateText = item.querySelectorAll('.comments-text') ? Array.from(btn[index].querySelectorAll('.comments-text')) : '';
      let content = Array.from(item.querySelectorAll('.link_table'));

      for (let i = 0; i < dateCreate.length; i++) {
        text[i] = `<p class="modal__comments-date">${dateCreate[i].textContent}</p><button class="btn btn__edit" onmouseover="toolTip('Редактировать')" onmouseout="toolTip()"data-text="Редактировать"data-edit></button><button class="btn btn__delete"onmouseover="toolTip('Удалить')" onmouseout="toolTip()"data-text="Удалить" data-delete><!--<i class="icon__delete"></i>--></button><p class="modal__comments-text">${dateText[i].textContent}</p>`;
        // if (i + 1 < dateCreate.length) {
        //   element.innerHTML += '<hr>';
        // }
      }

      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.textContent === 'Добавить ещё комментарий' || e.target.closest('.link_table') || e.target.getAttribute('data-text') === 'Редактировать') {
          openModal();
          modal.setAttribute('data-index', index)
         
          if (dateCreate.length) {
            const user = new Pag({
              size: dateCreate.length, // pages size
              page: 1, // selected page
              step: 3, // pages before and after current
              text: text
            });
            user.Init(document.getElementById('pag'));
          }
          if (e.target.getAttribute('data-text') === 'Редактировать') {
            modal.setAttribute('data-edits', e.target.dataset.edit);
            textarea.textContent = item.parentElement.querySelector('.comments-text').textContent.trim();
          }else if (e.target.textContent === 'Добавить комментарий') {
            modal.setAttribute('data-newcomment', 'new-comment');
            document.getElementById('pag').innerHTML = '';
          } else {
            modal.setAttribute('data-addcomment',dateCreate.length);
          }
          textarea.focus();
        }
      })
    });
    modal.addEventListener('click', (e) => {
      // console.log(e.target.type);
e.stopPropagation();
      if (e.target === modal || e.target === modalCloseBtn) { //e.target.getAttribute('.data-close') == ''
        closeModal();//|| e.target.type === 'reset'
      }
      
      if (e.target.type === 'submit') { //e.target.getAttribute('.data-close') == ''
        // addNote();
        e.preventDefault();

        const message = document.createElement('div');
        message.classList.add('add_comments_wrap');
        message.innerHTML = `          <div class="add_comments">
                                        <p class="comments-date">${new Date().toLocaleString()}</p>
                                        <p class="comments-text">${document.querySelector('#comments').value}</p>
                                        <a href="#" class="add_comments_link" data-edit="0" data-text="Редактировать"></a>
                              </div>
                                    <a href="#" class="link_table">Добавить ещё комментарий</a>
                                `;
        message.querySelector('.add_comments_link');
        if (modal.hasAttribute('data-newcomment')) {
          let numberPost = modal.getAttribute('data-index');
          // console.log(numberPost);
          btn[numberPost].innerHTML='';
          btn[numberPost].append(message) ;
          modal.removeAttribute('data-index');modal.removeAttribute('data-newcomment');
        }
          if (modal.hasAttribute('data-addcomment')) {
          let numberPost = modal.getAttribute('data-index');
          // console.log(numberPost);
          btn[numberPost].append(message);
          modal.removeAttribute('data-index');modal.removeAttribute('data-addcomment');
        } 
         if (modal.hasAttribute('data-edits')) {
          let numberPost = modal.getAttribute('data-index');
          let numberComment = modal.getAttribute('data-edits');
let mess = [`<p class="comments-date">${new Date().toLocaleString()}</p>`,`<p class="comments-text">${document.querySelector('#comments').value}</p>`,
`<a href="#" class="add_comments_link" data-edit="${numberComment}" data-text="Редактировать"></a>`]
message.innerHTML = mess.join('');

          btn[numberPost].querySelector(`[data-edit="${numberComment}"]`).replaceWith(message)
          modal.removeAttribute('data-edits');modal.removeAttribute('data-index');
        }
        closeModal();
      }
      e.stopPropagation();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }
  modalUser();
});
