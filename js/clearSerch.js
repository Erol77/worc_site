window.onload = function () {
  var search = document.querySelector(".search");
  if (search) {
    search.addEventListener('keyup', showButton, true);
    search.addEventListener('click', resetInput, true);
    search.addEventListener('click', showButton, true);
  }
}


function resetInput(e) {
  var input = this.querySelector('input');
  input.value = input.defaultValue;
}

function showButton() {
  var button = this.querySelector('button'),
    input = this.querySelector('input');
  if (input.value.length) {
    removeClass(button, "hidden");
  } else {
    addClass(button, 'hidden');
  }
}

function addClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  if (re.test(o.className)) return
  o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}
