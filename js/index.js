// window.onload = function () {
//   var tabs = document.getElementById('tab-container').children
//   var tabcontents = document.getElementById('tab-content').children

//   var myFunction = function () {
//     var tabchange = this.tabindex
//     for (var int = 0; int < tabcontents.length; int++) {
//       tabcontents[int].className = 'tabcontent'
//       tabs[int].className = 'tab'
//     }
//     tabcontents[tabchange].classList.add('tab-active')
//     this.classList.add('current-tab')
//   }

//   for (var index = 0; index < tabs.length; index++) {
//     tabs[index].tabindex = index
//     tabs[index].addEventListener('click', myFunction, false)
//   }
// }

$(document).ready(function () {
  // Variables
  var clickedTab = $('.tabs > .active')
  var tabWrapper = $('.tab-content')
  var activeTab = tabWrapper.find('.active')

  // Show tab on page load
  activeTab.show()

  // Set height of wrapper on page load

  $('.tabs > span').on('click', function () {
    // Remove class from active tab
    $('.tabs > span').removeClass('active')

    // Add class active to clicked tab
    $(this).addClass('active')

    // Update clickedTab variable
    clickedTab = $('.tabs .active')

    // fade out active tab
    activeTab.fadeOut(250, function () {
      // Remove active class all tabs
      $('.tab-content > ul').removeClass('active')

      // Get index of clicked tab
      var clickedTabIndex = clickedTab.index()

      // Add class active to corresponding tab
      $('.tab-content > ul').eq(clickedTabIndex).addClass('active')

      // update new active tab
      activeTab = $('.tab-content > .active')

      activeTab.fadeIn(250)
    })
  })
})

var swiperIntroduction = new Swiper('.introduction-slider', {
  spaceBetween: 30,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})

var swiperService = new Swiper('.service-slider', {
  spaceBetween: 30,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})

var swiperFeedback = new Swiper('.slider-container', {
  spaceBetween: 30,
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})
