const menu_btn = document.getElementById("menu_btn");
const btn_close = document.getElementById("btn_close");
const nav = document.querySelector('nav')

menu_btn.addEventListener(
    'click', () => {
        nav.classList.toggle('active')
    }
)

btn_close.addEventListener(
    'click', () => {
        nav.classList.remove('active');
    }
)