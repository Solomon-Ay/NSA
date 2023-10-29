
function response(){ 
    const responsiveBar = document.getElementById('container');
    responsiveBar.classList.add('show');   
    // if (window.innerWidth < 800) {
    //     responsiveBar.style.display = 'flex';
    // }
}

function toggleDown() {
    const responsiveBar = document.getElementById('container');
    responsiveBar.classList.remove('show');
}

const menuBar = document.getElementById('nav')
const menu_bar = document.querySelectorAll('.menu_bar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menuBar.style.boxShadow = "0px 0px 5px 0px #000000";
        menuBar.style.backgroundColor = " #262638ed";
        menuBar.style.color = "#ffffff";
        menu_bar.forEach(function(menu_bar) {
            menu_bar.style.color = "#ffffff";
        })

    
    } else {
        menuBar.style.boxShadow = "none";
        menuBar.style.backgroundColor = "#ffffff";
        menuBar.style.color = "#262638";
        menu_bar.forEach(function(menu_bar) {
            menu_bar.style.color = "#262638";
        })

    }
});


const showMore = document.getElementById('show-more')
const link = document.getElementById('link')

function show() {
    showMore.classList.add("show")
    link.style.color = "#ffffff"
}





var timing_hour = document.getElementById("hour")
var timing_colon = document.getElementById("colon")
var timing_minute = document.getElementById("minute")
var timing_colontwo = document.getElementById("colon_two")
var timing_second = document.getElementById("second")
var timing_ampm = document.getElementById("ampm")
const localTime = ()=> {
          var timer = new Date();

          var hours = timer.getHours();
          var minutes = timer.getMinutes();
          var seconds = timer.getSeconds();

          var amPm = (hours < 12 ) ? "AM" : "PM"

          hours = (hours > 12) ? hours - 12  : hours;

          hours = ("0" + hours).slice(-2);
          minutes = ("0" + minutes).slice(-2);
          seconds = ("0" + seconds).slice(-2);

          timing_hour.innerHTML = hours
          timing_colon.innerHTML = ":"
          timing_minute.innerHTML = minutes
          timing_colontwo.innerHTML = ":"
          timing_second.innerHTML = seconds
          // timing_ampm.innerHTML = amPm

          var  t = setTimeout(localTime, 500)


}

localTime();


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const recipientEmail = 'olorundaresolomonay@gmail.com';

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

});


const scrollToTopButton = document.querySelector('.scroll_up');

window.addEventListener('scroll', () => {
          if (window.scrollY > 500) {
                    scrollToTopButton.style.display = 'block';
          } else {
                    scrollToTopButton.style.display = 'none';
          }
});

function scrollToTop() {
          window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
          });
}

const boxes = document.querySelectorAll('.box');

function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return(
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || window.documentElement.clientHeigth) &&
                    rect.right <= (window.innerWidth || window.documentElement.clientWidth)
          );
}

function animateBoxes() {
          boxes.forEach(box => {
                    if(isElementInViewport(box)) {
                              const animationType = box.getAttribute('data-animation');
                              box.style.opacity = '1';
                              box.style.transform = 'translateY(0)';

                              if (animationType === 'slide-left') {
                                        box.style.transform = 'translateY(-50)';
                              } else if (animationType === 'zoom-in') {
                                        box.style.transform = 'scale(1.2)';
                              }
                    }
          });
}

window.addEventListener('scroll', animateBoxes);
window.addEventListener('load', animateBoxes);





