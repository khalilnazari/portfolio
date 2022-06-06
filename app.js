const toggleBtn = document.querySelector('.nav-toggle-btn')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-link')

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        navbar.classList.remove('show')
    })
})