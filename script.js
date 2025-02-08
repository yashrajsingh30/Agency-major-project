gsap.from(".line h1", {
    y:150,
    stagger: 0.2,
    duration: 0.6,
    delay:0.5
});

var h5timer = document.querySelector("#line1-part1 h5");
var grow=0;
setInterval(function(){

    if(grow<100){
        grow++;
        h5timer.textContent = grow;
    }
    else{
        grow = 100;
    }
}, 25);