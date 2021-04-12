const Bgheader = document.querySelector('#dynamic')
const mobileNav = document.querySelector('.mobile-nav')
const mobileToggle = document.querySelector('.mobile-toggle')
const toTop = document.querySelector('.to-top')
const links = document.querySelector('.faq-link')
const pageLoader = document.querySelector('.loader')
const modalBg = document.querySelector('.modalBg')
const closeModal = document.querySelector('.close-modal')


window.addEventListener('load', function () {
  setTimeout(function () {
    pageLoader.style = 'display: none'
  }, 2000)
  modalBg.classList.add('showModal')
})

// Mobile Screen Sidebar Toggle function
mobileToggle.addEventListener('click', (e) => {
  mobileNav.classList.toggle('showNav')
  console.log('Hello World')
})

modalBg.addEventListener('click', function() {
  modalBg.classList.remove('showModal')
})

closeModal.addEventListener('click', function() {
  modalBg.classList.remove('showModal')
})


// OnScroll Function
window.addEventListener('scroll', function () {
  if (pageYOffset > 100) {
    Bgheader.style = 'background: #00263F'
  } else {
    Bgheader.style = 'background: transparent'
  }
})

window.addEventListener('scroll', function () {
  if (pageYOffset > 5000) {
    toTop.style = 'display: block'
  } else {
    toTop.style = 'display: none'
  }
})


