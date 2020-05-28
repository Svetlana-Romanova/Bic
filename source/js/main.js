'use strict';

var hamburger = document.querySelector('.logo__hamburger');
var nav = document.querySelector('.nav');
var navList = document.querySelector('.nav__list');
var navItem = document.querySelectorAll('.nav__item');
var navLink = document.querySelectorAll('.nav__link');
var logoHamburger = document.querySelector('.logo__hamburger');


function ready() {
  function openHamburger() {
    hamburger.classList.toggle('logo__hamburger--open');

    navList.classList.toggle('nav__list--adaptive');

    navItem.forEach(function (item) {
      if (item.classList.contains !== ('nav__item--adaptive')) {
        item.classList.add('nav__item--adaptive');
      }
    });

    navLink.forEach(function (item) {
      if (item.classList.contains !== ('nav__link--adaptive')) {
        item.classList.add('nav__link--adaptive');
      }
    });
  }

  function closeHamburger() {
    hamburger.classList.remove('logo__hamburger--open');
    navList.classList.remove('nav__list--adaptive');
  }

  function deleteNojs() {
    nav.classList.remove('nav--nojs');
    navList.classList.remove('nav__list--nojs');
    navItem.forEach(function (item) {
      item.classList.remove('nav__item--nojs');
    });
  }

  deleteNojs();

  logoHamburger.classList.add('logo__hamburger--adaptive');

  hamburger.addEventListener('click', openHamburger);

  navLink.forEach(function (item) {
    item.addEventListener('click', closeHamburger);
  });

  $('input[name=phone]').mask('+7 (999) 999-99-99');

  $('#form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения'
      },
      phone: {
        required: 'Введите номер телефона',
      }
    }
  });

  var custom2 = new Scrollbot('#body', 10).setStyle({
    'background': 'none',
    'z-index': '2'
  }, {
    'background': 'rgba(0,0,0,0)'
  });
  var psuedo = document.createElement('div');
  psuedo.style.cssText = 'height:100%;width:2px;left:4px;background:#808080;position:absolute;z-index:1';
  custom2.scrollBarHolder.appendChild(psuedo);
}

document.addEventListener('DOMContentLoaded', ready);
