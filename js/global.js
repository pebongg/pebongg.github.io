// let intro = document.querySelector('.intro');
// let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelectorAll('.logo');

// window.addEventListener("DOMContentLoaded", () => {

//     setTimeout(() => {
//         logoSpan.forEach((span, idx) => {
//             setTimeout(() => {
//                 span.classList.add('active');
//             }, (idx + 1) * 400)
//         });

//         setTimeout(() => {
//             logoSpan.forEach((span, idx) => {

//                 setTimeout(() => {
//                     span.classList.remove('active');
//                     span.classList.add('fade');
//                 }, (idx + 1) * 50)
//             })
//         }, 1300 );

//         setTimeout(() => {
//             intro.style.top = '-100vh';
//         }, 1800)

//     })
// })

var prevScrollpos = window.pageYOffset;
let sideNav = document.getElementById('sideNav');
let overlayNav = document.getElementById('overlayNav');
let navContent = document.getElementById('navContent');
let closeNav = document.getElementById('closeNav');
let myHeader = document.getElementById('stickyHeader');
let myToggle = document.getElementById('stickyToggle');
let myButton = document.getElementById('back-to-top-btn');

sideNav.addEventListener('click', openNavContent);

    function openNavContent() {
        navContent.style.width = "360px";
        overlayNav.style.display = "block";
    }


closeNav.addEventListener('click', closeNavContent);
overlayNav.addEventListener('click', closeNavContent);


    function closeNavContent(){
        navContent.style.width = "0";
        overlayNav.style.display = "none";
    }

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        myHeader.style.top = "0";
    } else {
        myHeader.style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
    
    if (prevScrollpos > 200) {
        
        myButton.style.opacity = "1";
        myButton.style.right = "20px";
    } else {
        myButton.style.opacity = "0";
        myButton.style.right = "-50vw";
    }
}
    
myButton.addEventListener('click', topFunction);
    
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
function submitForm() {
    var frm = document.getElementById('formMessage');
        frm.submit();
        frm.reset();
        return false;
}
    
function autoClose() {
    setTimeout(function () { window.close() }, 6000);
}