const toggleSwitch = document.querySelector('input[type="checkbox"]');
const HeaderNav = document.getElementById('header-nav');
const imageOne = document.getElementById('image1');
const imageTwo = document.getElementById('image2');
const imageThree = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const toggleIcon = document.querySelector('.toggle-icon');
console.log(imageOne.attributes[0].nodeValue);

function darkMode() { 
    console.log(toggleIcon.children.classList);
    toggleIcon.children[0].classList.remove('fa-sun'); 
    toggleIcon.children[0].classList.add('fa-moon'); 
    HeaderNav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    imageOne.src = 'img/undraw_mindfulness_moon.svg';
    imageTwo.src = 'img/undraw_mind_moon.svg';
    imageThree.src = 'img/undraw_body_mind_moon.svg';
}

function lightMode() { 
    console.log(toggleIcon.children.classList);
    toggleIcon.children[0].classList.remove('fa-moon'); 
    toggleIcon.children[0].classList.add('fa-sun'); 
    HeaderNav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    imageOne.src = 'img/undraw_mindfulness_sun.svg';
    imageTwo.src = 'img/undraw_mind_sun.svg';
    imageThree.src = 'img/undraw_body_mind_sun.svg';
}

function switchTheme(event) { 
    if(event.target.checked) {  
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {  
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);