'use strict'
// Open Toggle Function
document.querySelector('.mobile-toggle').addEventListener('click', function(){
  document.querySelector('nav').classList.add('show-nav')
  document.querySelector('nav').classList.remove('hide-nav')
})

// Close Toggle Function
document.querySelector('.close-toggle').addEventListener('click', function(){
  document.querySelector('nav').classList.add('hide-nav')
})
