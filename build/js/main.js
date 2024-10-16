const initApp =() =>{
    const hamburgerBtn = document.getElementById('hamburger-button')
    const MobileMenu = document.getElementById('mobile-menu')

    const toggleMenu =() =>{
        MobileMenu.classList.toggle('hidden')
        MobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')

    }
    hamburgerBtn.addEventListener('click',toggleMenu)
    MobileMenu.addEventListener('click',toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp)