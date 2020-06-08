'use strict';

var body = document.querySelector('#body');
var hamburger = document.querySelector('.logo__hamburger');
var nav = document.querySelector('.nav');
var navList = document.querySelector('.nav__list');
var navItem = document.querySelectorAll('.nav__item');
var navLink = document.querySelectorAll('.nav__link');

window.addEventListener('DOMContentLoaded', function () {
  function openHamburger() {
    hamburger.classList.toggle('logo__hamburger--open');
    nav.classList.toggle('nav--adaptive');
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

    body.classList.add('overflow-hidden');
  }

  function closeHamburger() {
    hamburger.classList.remove('logo__hamburger--open');
    nav.classList.remove('nav--adaptive');
    navList.classList.remove('nav__list--adaptive');
    body.classList.remove('overflow-hidden');
  }

  function deleteNojs() {
    nav.classList.remove('nav--nojs');
    navList.classList.remove('nav__list--nojs');
    navItem.forEach(function (item) {
      item.classList.remove('nav__item--nojs');
    });
  }

  deleteNojs();

  hamburger.classList.add('logo__hamburger--adaptive');

  hamburger.addEventListener('click', openHamburger);

  navLink.forEach(function (item) {
    item.addEventListener('click', closeHamburger);
  });

  // eslint-disable-next-line no-undef
  jQuery(function ($) {
    $('input[name=phone]').mask('+7 (999) 999-99-99');
  });
  // eslint-disable-next-line no-undef
  jQuery(function ($) {
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
  });
});
