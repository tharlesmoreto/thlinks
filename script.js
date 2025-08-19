const button = document.querySelector('.button')

button.addEventListener('click', toggleMode)

function toggleMode() {
  const body = document.body
  body.id = body.id === 'light-mode' ? '' : 'light-mode'
}
