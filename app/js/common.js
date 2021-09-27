document.addEventListener('DOMContentLoaded', () => {
    const btnMnu = document.querySelector('.btnMnu')
    const mobileMenu = document.querySelector('.mobileMenu')
    const closeMobileMenu = document.querySelector('.closeMobileMenu')
    btnMnu.addEventListener('click', (event) => {
        btnMnu.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    })

    closeMobileMenu.addEventListener('click', (event) => {
        btnMnu.classList.remove('active')
        mobileMenu.classList.remove('active')
    })


});
