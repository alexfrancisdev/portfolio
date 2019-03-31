$(window).on('load', function(e) {
  $('body').addClass('loaded')
})

$(document).ready(function() {
  $('.slider').slick({
    fade: false,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: false
        }
      }
    ]
  })
})

var typed = new Typed('.typed', {
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

$('.slider').on('click', function(e) {
  $(this).slick('slickNext');
})

// --------------------------------------------------------- //
// SMOOTH SCROLL
// --------------------------------------------------------- //
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 30
          },
          1500
        )
      }
    }
  })
