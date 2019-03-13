let h2 = document.querySelector('.randompic h2');
let div = document.querySelector('.randompic');
div.addEventListener('click', getMeal);

let foodsrc = ['images/candy.jpg', 'images/rice.jpg', 'images/cornflakes.jpg', 'images/baby.jpg'];
let foodtext = ['Godis', 'Ris', 'Cornflakes', 'Bebis'];


//Slumpar fram en bild med beskrivning och sätter in de i diven randompic.
function getMeal(){
    let bcimage = div.style.backgroundImage, i;
    while(bcimage === div.style.backgroundImage){
        i = Math.floor(Math.random()*4);
        bcimage = 'url("' + foodsrc[i] + '")';
    }
    div.style.backgroundImage = bcimage;
    h2.innerText = foodtext[i];
}