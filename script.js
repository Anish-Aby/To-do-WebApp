const leftCirle = document.querySelector('.cirlce1');
const style = getComputedStyle(leftCirle);

leftCirle.addEventListener("click", expand);

function expand(){
    leftCirle.style.height = 100;
    leftCirle.style.width = 100;
}