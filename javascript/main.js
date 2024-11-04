
menuShow = document.querySelector(".menu-show");
menuHide = document.querySelector(".menu-hide");
console.log(menuShow);
console.log(menuHide);

aside = document.querySelector("aside");
console.log(aside);

container = document.querySelector(".black-screen");



menuHide.onclick = function  () {
    container.style.display= 'none';

    container.style.width= `0`;
    aside.style.left = `-158px`;
}
menuShow.onclick=function  () {
    // container.style.zIndex = 99;
    container.style.display= 'block';

    container.style.width= `100vw`;
    aside.style.left = 0;
}



