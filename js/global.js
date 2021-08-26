let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 1300 );

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 1800)

    })
})

var prevScrollpos = window.pageYOffset;
let myHeader = document.getElementById('stickyHeader');
let myToggle = document.getElementById('stickyToggle');
var myButton = document.getElementById("back-to-top-btn");
let mySocials = document.getElementById('stickySocials');

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        myHeader.style.top = "0";
    } else {
        myHeader.style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;

    if (prevScrollpos > 200) {
        mySocials.style.opacity = "1";
        mySocials.style.left = "0";
        myButton.style.opacity = "1";
        myButton.style.right = "20px";
    } else {
        mySocials.style.opacity = "0";
        mySocials.style.left = "-50vw";
        myButton.style.opacity = "0";
        myButton.style.right = "-50vw";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {

    document.getElementById("fullPageMenu").style.right = "0";
}

function closeNav() {

    document.getElementById("fullPageMenu").style.right = "-100vw";
}

function autoClose() {
    setTimeout(function () { window.close() }, 8000);
}

function submitForm() {
    var frm = document.getElementById('formMessage');
    frm.submit();
    frm.reset();
    return false;
}