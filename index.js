var can = document.getElementById('canvas'); 
var particles = [];
var tick = 0;
function Looping(){
    window.requestAnimationFrame(Looping);
     creatParticles();
     updateParticles();
     killParticles();
     drawParticles();
}
window.requestAnimationFrame(Looping);
function creatParticles(){
   if(tick % 10 == 0){
      if(particles.length < 100){
          particles.push({
              x:Math.random()*can.width,
              y:0,
              speed:1+Math.random()*3,
              redius:1+Math.random()*5,
              color: "white",
          });
      }
   } 
}
function updateParticles(){
    for(var i in particles){
        var part = particles[i];
        part.y += part.speed;
    }
}
function killParticles(){
    for(var f in particles){
        var part = particles[f];
        if(part.y > can.height){
            part.y = 0;
           
           }
    }
}
function drawParticles(){
    var c = can.getContext('2d');
    c.fillStyle = "black";
    c.fillRect(0,0,can.width,can.height);
    for(var s in particles){
        var part = particles[s];
        c.beginPath();
        c.arc(part.x,part.y,part.redius,0,Math.PI*2);
        c.closePath();
        c.fillStyle = part.color;
        c.fill();
    }
}