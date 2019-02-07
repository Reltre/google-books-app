const message = document.getElementsByClassName('close')
message[0].addEventListener('click', (event) => {
  event.currentTarget.parentNode.remove()
}, false);