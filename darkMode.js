const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const divBg = document.getElementById("boxHub");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        divBg.style.backgroundColor = "white";
        body.style.color = 'black';

        body.style.transition = '1s';
        divBg.style.transition = '1s';


    }else{
        body.style.background = 'black';
        divBg.style.backgroundColor = "black";
        body.style.color = 'white';
    
        body.style.transition = '1s';
        divBg.style.transition = '1s';
        
    }
});