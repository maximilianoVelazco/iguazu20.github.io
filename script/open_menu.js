var boton_nav = document.querySelector('.nav_toggle');
var nav_menu = document.querySelector('.nav_menu');
var btn_abrir = document.querySelector('.abrir_menu');
var btn_cerrar = document.querySelector('.cerrar_menu');

boton_nav.addEventListener('click', function(){
    nav_menu.classList.toggle('is_active');
    btn_abrir.classList.toggle('not_active');
    btn_cerrar.classList.toggle('is_active');
});

