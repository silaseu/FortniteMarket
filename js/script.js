"use strict";

document.addEventListener('DOMContentLoaded', () =>{

    //header

    const header = document.querySelector('.header__top'),
          intro = document.querySelector('.intro');

    const headerheight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if(scrollDistance >= headerheight){
            intro.style.marginTop = '0px';
            header.classList.add('header--fixed');
        }else{
            intro.style.marginTop = '0px';
            header.classList.remove('header--fixed');
        }
    });

    //class

    class products{
        constructor(modal,img,alt,tovar,prise,...classes){
            this.modal = modal;
            this.img = img;
            this.alt = alt;
            this.tovar = tovar;
            this.prise = prise;
            this.classes = classes;
            this.parent = document.querySelector('.section__block');
        }

        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                this.classes = 'section__block-inner';
                element.classList.add(this.classes);
            }else{
                this.classes.forEach(() => element.classList.add('section__block-inner'));
            }

            element.innerHTML = `
                    <div ${this.modal} class="section__block-inner-img">
                        <img class="section__block-inner-item" src="${this.img}" alt="${this.alt}"></img>
                    </div>
                    <div class="section__block-inner-info">
                        <h1 class="section__block-inner-info-title">${this.tovar}</h1>
                        <h1 class="section__block-inner-info-prise">${this.prise}</php><span>₽</span></h1>
                        <div ${this.modal} class="btn__buy"> Купить</div>
                    </div>
            `;

            this.parent.append(element);
        }
    }

    new products(
        "data-modal",
        "img/1.png",
        "Дискорд Нитро На Один Месяц",
        "Гифт на Один месяц",
        129
    ).render();

    new products(
        "data-modal-two",
        "img/1.png",
        "Дискорд Нитро На Один Год",
        "Гифт на Один год",
        764
    ).render();




    //tab
    const tab = document.querySelectorAll('.faq__block-inner-tab'),
          tabContent = document.querySelectorAll('.faq__block-inner-content');


    tab.forEach((item,i) => {
        item.addEventListener('click', () => {
            if(!tabContent[i].classList.contains('active') && !tab[i].classList.contains('active')){
                tabContent[i].classList.add('active');
                tab[i].classList.add('active');
            }else{
                tabContent[i].classList.remove('active');
                tab[i].classList.remove('active');
            }
        });
    });
    //modal
    const modalOpen = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]'),
          modaltwo = document.querySelector('.modal-two'),
          modalOpenTwo = document.querySelectorAll('[data-modal-two]'),
          modalCloseTwo = document.querySelector('[data-close-two]');

    function showModal(){
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function showModalTwo(){
        modaltwo.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function hideModal(){
        modal.classList.remove('show');
        document.body.style.cssText = '';
    }

    function hideModalTwo(){
        modaltwo.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalOpen.forEach(item => {
        item.addEventListener('click', showModal);
    });

    modalClose.addEventListener('click', hideModal);


    modalOpenTwo.forEach(item => {
        item.addEventListener('click', showModalTwo);
    });

    modalCloseTwo.addEventListener('click', hideModalTwo);

    modal.addEventListener('click', (e) => {
        const target = e.target;

        if( target === modal){
            hideModal();
        }
    });

    modaltwo.addEventListener('click', (e) => {
        const target = e.target;

        if( target === modaltwo){
            hideModalTwo();
        }
    });

    //burger
    const burger = document.querySelector('.burger'),
          nav = document.querySelector('.header__nav'),
          burgerItem = document.querySelector('.burger__item'),
          burgerLinks = document.querySelectorAll('.header__link');


    function showBurger(){
        nav.classList.add('show');
        burgerItem.classList.add('show');
        burger.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function hideBurger(){
        nav.classList.remove('show');
        burgerItem.classList.remove('show');
        burger.classList.remove('show');
        document.body.style.overflow = '';
    }

    burgerLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;

            if(item === target){
                hideBurger();
            }
        });
    });

    burger.addEventListener('click', () => {
        if(!nav.classList.contains('show')){
            showBurger();
        }else{
            hideBurger();
        }
    });



    //jivo
    setTimeout(function(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//code-jvs.jivosite.com/script/widget/ocs3XGBe2F';
        var ss = document.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    }, 2200);



});