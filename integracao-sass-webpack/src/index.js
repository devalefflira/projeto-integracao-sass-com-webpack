import $ from 'jquery';
import './sass/style.scss';
import Button from './componentes/button/button.js';
import Wallpaper from './images/tag_wallpaper.png';

$(function () {
  let button = new Button();
  button.setTitle('Mostrar Wallpaper');
  button.setClick(function () {
    alert('Clique em OK');
  });
  $('.area').html(button.render());
});
