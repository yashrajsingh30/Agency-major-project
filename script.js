function loadinganimation() {
  var tl = gsap.timeline();
  var h5timer = document.querySelector("#line1-part1 h5");
  var grow = 0;

  tl.from(".line h1, .line h2", {
    y: 150,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.3,
  });

  gsap.from("#wait h4", {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: 1,
  });

  gsap.from("#line1-part1 h5, #line1-part1 h6", {
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    onStart: function () {
      setInterval(function () {
        if (grow < 100) {
          grow++;
          h5timer.textContent = grow;
        } else {
          grow = 100;
        }
      }, 20);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 2,
    lazy: true,
  });

  tl.from("#page1", {
    delay: 0.4,
    y: 1600,
    ease: "power1.inOut",
  });

  tl.to("#loader", {
    display: "none",
  });
}
function cursorAnimation(){
    document.addEventListener("mousemove", function(event){
        gsap.to("#crsr", {
            left: event.x,
            top: event.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}


loadinganimation();
cursorAnimation();

