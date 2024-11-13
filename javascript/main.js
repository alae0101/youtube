
menuShow = document.querySelector(".menu-show");
menuHide = document.querySelector(".menu-hide");
console.log(menuShow);
console.log(menuHide);

aside = document.querySelector("aside");
console.log(aside);

container = document.querySelector(".black-screen");

function  hide() {
    container.style.display= 'none';

    container.style.width= `0`;
    aside.style.left = `-158px`;
}
function show () {
    // container.style.zIndex = 99;
    container.style.display= 'block';

    container.style.width= `100vw`;
    aside.style.left = 0;
}
container.onclick = hide;
menuHide.onclick = hide;
menuShow.onclick = show;


subscription = document.querySelectorAll('.subscription');






