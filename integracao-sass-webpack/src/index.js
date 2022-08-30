import $ from 'jquery';
import './sass/style.scss';
import Button from './componentes/button/button.js';

$(function () {
  let button = new Button();
  button.setTitle('Teste');
  button.setClick(function () {
    alert('Clicou');
  });
  $('.area').html(button.render());
});
