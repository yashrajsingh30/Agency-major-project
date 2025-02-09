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
    duration: 0.5,
    ease: "power1.inOut",
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav ", {
    opacity: 0,
  });

  tl.from(".center h2", {
    y: 100,
    opactiy: 0,
    duration: 0.6,
    stagger: 0.1,
  });
}
function cursorAnimation() {
  //   document.addEventListener("mousemove", function (event) {
  //     gsap.to("#crsr", {
  //       left: event.x,
  //       top: event.y,
  //     });
  //   });

  Shery.makeMagnet("#nav-part2 h4");
}

function contentHover() {
    var hover1 = document.querySelector("#hover1");
    var hover2 = document.querySelector("#hover2");
    hover1.addEventListener("mouseenter", function () {
      hover1.style.webkitTextStroke = "1px white";
  
      hover1.style.color = "transparent";
      hover1.style.textDecoration = "none";
  
      hover1.style.transition = "cubic-bezier(0.19, 1, 0.22, 1) 0.4s";
    });
  
    hover1.addEventListener("mouseleave", function () {
      hover1.style.webkitTextStroke = "0px white";
  
      hover1.style.color = "#fff";
      hover1.style.textDecoration = "underline";
      hover1.style.transition = "cubic-bezier(0.19, 1, 0.22, 1) 0.4s";
    });
  
    hover2.addEventListener("mouseenter", function () {
      hover2.style.webkitTextStroke = "1px white";
  
      hover2.style.color = "transparent";
      hover2.style.textDecoration = "none";
      hover2.style.transition = "cubic-bezier(0.19, 1, 0.22, 1) 0.4s";
    });
  
    hover2.addEventListener("mouseleave", function () {
      hover2.style.webkitTextStroke = "0px white";
      hover2.style.color = "#fff";
      hover2.style.textDecoration = "underline";
      hover2.style.transition = "cubic-bezier(0.19, 1, 0.22, 1) 0.4s";
    });
  }

loadinganimation();
cursorAnimation();
contentHover();

