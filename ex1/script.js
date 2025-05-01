let i = 1,step=500,maxi = 3*step, im=2;

setInterval(() => {
    document.querySelector("#recl img").src ="im"+ im + ".png";
    document.getElementById("recl").style.opacity=-4* (((i%step)/step)-0.5)**2+0.9;
    document.getElementById("recl").href ="im"+ im + ".html";
    im=1+Math.floor(i/step);
    i++;
    if (i > maxi) {
        i = 1;
    }
}, 2);