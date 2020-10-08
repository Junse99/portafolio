addEventListener('DOMContentLoaded', ()=> {
    const btn_menu = document.querySelector('.btn-menu');
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items = document.querySelector('.sections__list');
            menu_items.classList.toggle('show');
            const icono = document.getElementById('icono');
            icono.classList.toggle('fa-times');
        });
    }
})