"use strict";

//scrolls

const header = document.querySelector('.header__top'),
    intro = document.querySelector('.intro');

const headerheight = header.offsetHeight,
    introheight = intro.offsetHeight;

console.log(introheight);

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= headerheight) {
        intro.style.marginTop = '0px';
        header.classList.add('header--fixed');
    } else {
        intro.style.marginTop = '0px';
        header.classList.remove('header--fixed');
    }
});





//tab
const tab = document.querySelectorAll('.faq__block-inner-tab'),
    tabContent = document.querySelectorAll('.faq__block-inner-content');


tab.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (!tabContent[i].classList.contains('active') && !tab[i].classList.contains('active')) {
            tabContent[i].classList.add('active');
            tab[i].classList.add('active');
        } else {
            tabContent[i].classList.remove('active');
            tab[i].classList.remove('active');
        }
    });
});


//modal

function modals(modalSelector, blocksSelector, closeSelector) {
    const modal = document.querySelector(modalSelector),
        blocks = document.querySelectorAll(blocksSelector),
        close = document.querySelector(closeSelector);

    const
        notification = document.querySelector('.notification'),
        notificationClose = document.querySelector('.notification__close');

    const notfct = () => {
        setTimeout(() => {
            notification.style.display = 'inline-flex';
        }, 300);

        notificationClose.addEventListener('click', () => {

            notification.classList.remove('left');
            notification.classList.add('hide');

            localStorage.setItem('modal', 'delete');

            setTimeout(() => {
                notification.remove();
                notification.classList.remove('hide');
            }, 500);

        });

        if (localStorage.getItem('modal', 'delete')) {
            notification.remove();
        } else {
            setTimeout(() => {
                notification.classList.add('hide');
                setTimeout(() => {
                    notification.remove();
                }, 4000);

            }, 2500);
        }
    };

    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '5px';
        notfct();
    }

    function hideModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';
    }

    blocks.forEach(item => item.addEventListener('click', showModal));
    close.addEventListener('click', hideModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            hideModal();
        }
    });
}

modals('.modal-two', '[data-modal-two]', '[data-close-two]');
modals('.modal', '[data-modal]', '[data-close]');



//burger
const burger = document.querySelector('.burger'),
    nav = document.querySelector('.header__nav'),
    burgerItem = document.querySelector('.burger__item'),
    burgerLinks = document.querySelectorAll('.header__link');


function showBurger() {
    nav.classList.add('show');
    burgerItem.classList.add('show');
    burger.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideBurger() {
    nav.classList.remove('show');
    burgerItem.classList.remove('show');
    burger.classList.remove('show');
    document.body.style.overflow = '';
}

burgerLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;

        if (item === target) {
            hideBurger();
        }
    });
});

burger.addEventListener('click', () => {
    if (!nav.classList.contains('show')) {
        showBurger();
    } else {
        hideBurger();
    }
});



//jivo
setTimeout(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//code-jvs.jivosite.com/script/widget/ocs3XGBe2F';
    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(s, ss);
}, 2200);