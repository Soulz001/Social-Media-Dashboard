 const SWITCH = document.querySelector(".switch");
SWITCH.addEventListener('click', () => {
        SWITCH.classList.toggle("dark")
        document.querySelector('body').classList.toggle('dark')
        let items = document.querySelectorAll('article')
        items.forEach(item => item.classList.toggle('dark'))
}) 

const hexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
console.log(hexColor())
