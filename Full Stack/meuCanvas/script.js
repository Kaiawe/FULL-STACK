const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');
function desenhar() {
    const centro = 200;
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centro);
    ctx.lineTo(400, centro);
    ctx.stroke();
    ctx.strokeStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(centro, centro);
    ctx.lineTo(centro, 400);
    ctx.stroke();
    ctx.strokeStyle = 'blue';
    ctx.beginPath(); ctx.moveTo(centro, centro); ctx.lineTo(50, 50); ctx.stroke();
    ctx.strokeStyle = 'red';
    ctx.beginPath(); ctx.moveTo(centro, centro); ctx.lineTo(350, 50); ctx.stroke();
    ctx.strokeStyle = 'green';
    desenharArco(centro, centro, 1, Math.PI, 0);
    desenharArco(centro, centro, 80, Math.PI, 0);
    desenharArco(centro, centro, 100, Math.PI, 0);
    desenharArco(centro, 400, 100, Math.PI, 0);
    desenharArco(centro, 400, 130, Math.PI, 0);
    ctx.fillStyle = 'blue'; ctx.fillRect(0, 0, 60, 60);
    ctx.fillStyle = 'red'; ctx.fillRect(340, 0, 60, 60);
    ctx.fillStyle = 'cyan'; ctx.fillRect(0, 160, 40, 70); 
    ctx.fillStyle = 'cyan'; ctx.fillRect(350, 180, 40, 40);
    ctx.fillStyle = 'red'; ctx.fillRect(150, 200, 50, 50);
    ctx.fillStyle = 'yellow'; ctx.fillRect(0, 320, 40, 80); ctx.fillRect(40, 360, 40, 40);
    ctx.fillStyle = 'black'; ctx.fillRect(360, 320, 40, 80); ctx.fillRect(310, 360, 50, 40);
    desenharCirculo(centro, 150, 20, 'cyan', 'blue');
    desenharCirculo(90, 290, 18, 'yellow', 'green'); 
    desenharCirculo(310, 290, 18, 'yellow', 'green');
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(centro, 400, 50, Math.PI, 0);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Canvas', 155, 70);
}
function desenharArco(x, y, raio, start, end) {
    ctx.beginPath();
    ctx.arc(x, y, raio, start, end);
    ctx.stroke();
}
function desenharCirculo(x, y, raio, corFundo, corBorda) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2);
    ctx.fillStyle = corFundo;
    ctx.fill();
    ctx.strokeStyle = corBorda;
    ctx.stroke();
}
desenhar();