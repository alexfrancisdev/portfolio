$(window).on('load', function() {
  console.log('Thanks for checking out my website. If you would like to get in touch please contact me at alexfrancisdev@gmail.com')
  console.table({
    email: 'alexfrancisdev@gmail.com',
    linkedIn: 'linkedin.com/in/alexfrancisdev',
    github: 'github.com/alexfrancisdev'
  })
})

$(window).scroll(function() {
  const scroll = $(window).scrollTop()
  if (scroll >= 200) {
    $('nav').addClass('nav-scrolled')
  } else {
    $('nav').removeClass('nav-scrolled')
  }
})

const locations = [ '#home', '#about', '#skills', '#projects', '#contact' ]
let currentLocation = 0
let moving = false

$(window).on('scroll', () => {
  if(moving) return
  if($(window).scrollTop() > $(locations[currentLocation]).offset().top) {
    currentLocation ++
    if(currentLocation > locations.length - 1) {
      currentLocation = locations.length - 1
    }
    movePage(locations[currentLocation])
  } else {
    currentLocation --
    if(currentLocation < 0) {
      currentLocation = 0
    }
    movePage(locations[currentLocation])
  }
})


$('a').on('click', function() {
  if(moving) return
  movePage(this.hash)
})

function movePage(location) {
  moving = true
  $('nav').children().removeClass('nav-active')
  $(`#nav-${location.slice(1)}`).addClass('nav-active')
  $('html, body').animate({
    scrollTop: $(location).offset().top
  }, 800, function(){
    window.location.hash = location
  })
  setTimeout(() => {
    moving = false
  }, 1200)
}

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
