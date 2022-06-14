window.addEventListener('DOMContentLoaded', () => {
  const btn = [...document.querySelectorAll('[data-modal]')],
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')
    btnEdit = [...document.querySelectorAll('.add_comments_link')];

    
    btnEdit.forEach((item, index) => {
  console.log(item.parentElement.parentElement.parentElement.textContent+'   '+index);
  item.addEventListener('click', (e) => {
    e.preventDefault();
    // item.onclick  = 
    // item.parentElement.parentElement.parentElement.querySelector('.link_table').call;
    // item.call( a, function(el) {
    //   //вешаем событие
    //   el.onclick = function(e) {
    //       //производим действия
    //   })

    openModal();
    modal.querySelector(".modal__comments").innerHTML = '';
    document.querySelector("textarea").textContent = item.parentElement.querySelector('.comments-text').textContent.trim() ;
    document.querySelector("textarea").focus();
  })
})



  function openModal() {
    document.querySelector("textarea").textContent='';
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
      console.log(index);
      let content = Array.from(item.querySelectorAll('.link_table'));
      content.map(j => j.addEventListener('click', () => {
        // item.preventDefault();
        const dateCreate = item.querySelectorAll('.comments-date');
        const dateText = item.querySelectorAll('.comments-text');
        modal.querySelector(".modal__comments").innerHTML = '';
        if (dateCreate.length > 0) {
          // [...item.querySelectorAll('.comments-date')].map(i => (i) => {
          const element = document.createElement('div');
          element.classList.add('modal__comments-list');
          for (let i = 0; i < dateCreate.length; i++) {

            element.innerHTML += `    <div data-element=${i} class="modal__comments-item">               
                              <p class="modal__comments-date" > ${dateCreate[i].textContent}</p> 
        <button class="btn btn__edit" data-edit></button>
                        <button button class = "btn btn__delete"
                        data-delete>
                            <!--                        <i class="icon__delete"></i>-->
                        </button>
        <p class = "modal__comments-text" > ${dateText[i].textContent} </p></div> `;
            if (i + 1 < dateCreate.length) {
              element.innerHTML += '<hr>';
            }
          }
          element.innerHTML += `
                    <button class="modal__comments-btn-left">
                        <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                            <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
                            </path>
                        </svg></button>
                    <button class="modal__comments-btn-right">
                        <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                            <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                            </path>
                        </svg>
                    </button>
 


          <div class="pagination">
                        <button class="pagination__button pagination__button--previous pagination__button--disabled" data-page="false" data-event-action="click: pagination-previous">
                            <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                                <path fill="currentColor" d="M7.51 15.51a.63.63 0 0 1-.46-.19L1.18 9.46C1.06 9.34.99 9.17.99 9s.07-.34.19-.46l5.86-5.86c.25-.25.67-.25.92 0s.25.67 0 .92L2.56 9l5.4 5.4c.25.25.25.67 0 .92a.61.61 0 0 1-.45.19z">
                                </path>
                            </svg>
                        </button>
                        <button class="pagination__button pagination__button--previous" data-page="false" data-event-action="click: pagination-previous">
                            <svg viewBox="0 0 9.15 18" width="0" height="0" class="arrow-icon">
                                <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                                </path>
                            </svg>
                        </button>

                        <!--                        <input type="text" class="pagination__item" value="1">-->
                        <p class="modal__pagination-list">1 из 94</p>

                        <button class="pagination__button pagination__button--next pagination__button--available" data-event-action="click: pagination-next">
                            <svg viewBox="0 0 9.14 18" width="0" height="0" class="arrow-icon ">
                                <path fill="currentColor" d="M1.64 15.51a.63.63 0 0 1-.46-.19.66.66 0 0 1 0-.92L6.59 9l-5.4-5.4c-.25-.25-.25-.67 0-.92s.67-.25.92 0l5.86 5.86c.12.12.19.29.19.46 0 .17-.07.34-.19.46L2.1 15.32a.62.62 0 0 1-.46.19z">
                                </path>
                            </svg>
                        </button>
<div class="pagination__goto" >
                        <p class="pagination__title">перейти на страницу</p>
                        <input type="text" class="pagination__item" value="1">

                        <button button class = "pagination__button pagination__button--goto"
                        data - page = "false"
                        data - event - action = "click: pagination-goTo" >
                            OK
                        </button>
</div>

                    </div>
        `;
          modal.querySelector('.modal__comments').append(element); //querySelector('.modal__comments-list')
          //  });
        }
        openModal();
        document.querySelector("textarea").focus();
      }))
    }

    if (item.querySelector('.link_table').textContent === 'Добавить комментарий') {
      item.querySelector('.link_table').addEventListener('click', () => {
        openModal();
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
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalCloseBtn) { //e.target.getAttribute('.data-close') == ''
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