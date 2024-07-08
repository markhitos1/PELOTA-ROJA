document.getElementById("player").addEventListener("mouseover",sumarPuntos );
document.getElementById("player").addEventListener("click",sumarPuntos );
const player = document.getElementById("player");
const contenedor = document.querySelector(".contenedor");
const puntuacion =  document.getElementById("puntos");
const total = document.querySelector(".total")
const tablero = document.querySelector('.tablero')
const reintentar = document.querySelector('.intentar')
const siguiente = document.querySelector('.siguiente')
const resultado = document.querySelector('.resultado')




puntos = 0;
tiempo = 5;
necesarios = 2;

function perder(){
    tablero.style.visibility = 'visible';
    total.textContent = `total : ${puntos}`;
    reintentar.addEventListener('click',()=>{
        location.reload()
    })
    siguiente.addEventListener('click',()=>{
       
        if(necesarios< 20){
            puntuacion.innerHTML = "puntos: <b>"+ `${puntos = 0}` + "/" + `${necesarios+= 5}` + "<b>";
            tiempo += 7;
        }if (necesarios> 20) {
            puntuacion.innerHTML = "puntos: <b>"+ `${puntos = 0}` + "/" + `${necesarios+= 2}` + "<b>";
            tiempo += 10;
        } else {
            
        }

        setTimeout(() => {
            tablero.style.visibility = 'hidden'
        }, 500);

        setTimeout(() => {
            player.style.visibility = 'visible'
        }, 1000);
    })

}

function ganar(){
    tablero.style.visibility = 'visible';
    tablero.style.background = '#3bb93b';
    resultado.textContent = 'ganaste'
    total.textContent = `total : ${puntos }`;

    reintentar.addEventListener('click',()=>{
        location.reload()
    })
    siguiente.addEventListener('click',()=>{
       
        if(necesarios< 20){
            puntuacion.innerHTML = "puntos: <b>"+ `${puntos = 0}` + "/" + `${necesarios+= 5}` + "<b>";
            tiempo += 7;
        }if (necesarios> 20) {
            puntuacion.innerHTML = "puntos: <b>"+ `${puntos = 0}` + "/" + `${necesarios+= 2}` + "<b>";
            tiempo += 10;
        } else {
            
        }

        setTimeout(() => {
            tablero.style.visibility = 'hidden'
        }, 500);

        setTimeout(() => {
            player.style.visibility = 'visible'
        }, 1000);
    })
}

function resultadoFinal(){
    if (tiempo == 0 && puntos != necesarios){
        player.style.visibility = 'hidden';
        perder();
    }
    if(puntos === necesarios){
        player.style.visibility = 'hidden';
        ganar()
    }

}

function sumarPuntos(){
    resultadoFinal()
    puntos++;  
    
   puntuacion.innerHTML = "puntos: <b>"+ puntos + "/" + necesarios + "<b>";
   
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    player.style.marginTop = randNum + "px";  
    player.style.marginLeft = randNum2 + "px"; 
  

}


function restarTiempo() {
    tiempo--;

    if(tiempo == -1){
        tiempo++
    }
    const reloj = document.getElementById("tiempo")
    reloj.innerHTML = " &nbsp;&nbsp;&nbsp;Tiempo: "  + tiempo;
}


setInterval(restarTiempo,1000);



