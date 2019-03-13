let containers = document.getElementsByClassName('carouselcontainer');

//Ändrar carouselens höjd så att den ser ok ut på olika breda skärmar
function go(){
    for(let i=0;i<containers.length;i++){
        containers[i].style.height = (document.querySelector('.carouselcenterimage').getBoundingClientRect()['height'] + 100) + 'px';
    }
}
window.onresize = go;