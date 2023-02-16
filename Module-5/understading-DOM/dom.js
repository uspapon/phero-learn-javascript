console.log("dom file from external sources")

document.getElementsByClassName('place-list')[0].style.color='red';

document.getElementById('section-header').style.color = 'green';

const el = document.getElementById('section-header');

el.getAttribute('class');

el.classList;

el.classList.remove('bad');

el.setAttribute('title', 'Hello from javascript ')

document.getElementsByClassName('section-main')[0].innerHtml;
document.getElementsByClassName('section-main')[0].innerText;

//document.getElementsByClassName('section-main')[0].innerHTML = "Wow! Dome has been changed";