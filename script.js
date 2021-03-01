// Animation of card

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sneaker = document.querySelector('.sneaker img');
const info = document.querySelector('.info');

container.addEventListener('mousemove',  e => {
    console.log(e.pageX);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    sneaker.style.transform = 'translateZ(50px) rotate(20deg)';
    info.style.transform = 'translateZ(40px)';
});

//animation out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    sneaker.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0)';

})