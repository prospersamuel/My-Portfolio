

const email = document.getElementById('email');
const copyEmail = document.getElementById('copy-email');

copyEmail.addEventListener('click', ()=>{
    navigator.clipboard.writeText(email.textContent);
    copyEmail.src = `assets/check.png`
    copyEmail.style.cursor = 'text'

    setTimeout(()=>{
        copyEmail.src = `assets/copy.png`
        copyEmail.style.cursor = 'pointer'
    }, 4000)
        
})

const darkMode = document.getElementById('dark');

darkMode.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if (document.body.classList == 'dark-theme') {
        darkMode.src = `assets/light.png`
    }else{
        darkMode.src = `assets/dark-mode.png`
    }
})
var array = [1,2,3,4,5];
console.log(without(array, 3))