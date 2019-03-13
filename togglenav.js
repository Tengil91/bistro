let nav = document.querySelectorAll('nav')[0];
let toggler = document.getElementById('burger');
let darkness = document.getElementById('darkness');
let visible = false;
nav.style.transition = "all 1s";

toggler.addEventListener('click', toggle);
nav.addEventListener('click', toggle);
darkness.addEventListener('click', toggle);

//stänger av/sätter på menyn
function toggle(){
    if(visible){
        nav.style.left = "-100%";
        darkness.style.display = 'none';
        visible = false;
    } else {
        nav.style.left = '0%';
        darkness.style.display = 'block';
        visible = true;
    }
}