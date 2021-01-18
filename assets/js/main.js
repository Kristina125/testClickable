"use strict";

const knight = document.querySelector('.knight-img');
const speedKnight = parseInt(knight.dataset.speed);

let randomX = (num) => Math.floor(Math.random() * window.innerWidth / num);
let randomY = (num) => Math.floor(Math.random() * window.innerHeight / num);
const moveBalls = (item, speed) => {
    setInterval(() => {
        item.style.transform = `translate(${Math.floor(randomX(speed))}px, ${Math.floor(randomY(speed))}px)`;
    }, 1000)
};

const parallaxKhight = event => {
    const x = event.clientX;
    knight.style.transform = `translateX(${Math.floor(x / speedKnight)}px)`;
};

const balls = document.querySelectorAll('.floating__balls');

document.addEventListener("DOMContentLoaded", () => {
    balls.forEach(ball => {
        let ballSpeed = parseInt(ball.dataset.speed);
        moveBalls(ball, ballSpeed);
    });
    document.addEventListener('mousemove', parallaxKhight);
});