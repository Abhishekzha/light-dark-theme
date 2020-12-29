const toggleSwitch=document.querySelector('input[type="checkbox"]');
const textBox=document.getElementById('text-box');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');

const darkTheme=()=>{
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList='fas fa-moon';
    nav.style.backgroundColor='rgb(0 0 0/ 50%)';
}
const lightTheme=()=>{
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList='fas fa-sun';
    nav.style.backgroundColor='rgb(255 255 255/ 50%)';
}

const switchTheme=event=>{
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkTheme()
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightTheme()
    }
}

toggleSwitch.addEventListener('change',switchTheme);
const themeStorage=localStorage.getItem('theme');
if(themeStorage){
    document.documentElement.setAttribute('data-theme',themeStorage);
    if(themeStorage==='dark'){
        toggleSwitch.checked=true;
        darkTheme();
    }else{
        lightTheme()
    }
}