const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

canvas.with = window.innerWidth;
canvas.with = window.innerHeight;

const num = "0123456789";
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const simbolos = "$%/*-!&?";

const coleccion = num + letras + simbolos;

const fontSize = 20;
const columns = canvas.with / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawTechLines(){
    ctx.lineWith = 0.5;
    ctx.strokeStyle = "rgba(0,255,0,0.05)";
}


