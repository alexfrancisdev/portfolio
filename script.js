$(window).on('load', function() {
  console.log('Thanks for checking out my website. If you would like to get in touch please contact me at alexfrancisdev@gmail.com')
  console.table({
    email: 'alexfrancisdev@gmail.com',
    linkedIn: 'linkedin.com/in/alexfrancisdev',
    github: 'github.com/alexfrancisdev'
  })
})

function checkScroll(){
  const scroll = $(window).scrollTop()
  if (scroll >= 150) {
    $('nav').addClass('nav-scrolled')
  } else {
    $('nav').removeClass('nav-scrolled')
  }
}

$(window).scroll(function() {
  checkScroll()
})

$(document).ready(function() {
  checkScroll()
})

$(document).ready(function(){
  $('#topnav').onePageNav({
    currentClass: 'nav-active',
    scrollOffset: 0
  })
})

const typed = new Typed('.typed', {
  loop: true,
  strings: [
    'loves building websites',
    'makes his own pasta',
    'is addicted to sweets',
    'takes things apart, sometimes reassembles',
    'gets things done',
    'loves to learn',
    ' - podcast addict',
    'makes websites',
    'builds apps',
    'plays guitar'
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000
})
