function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

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
  tl.from("#center1",{
    opacity: 0,
    duration: 1
  },"-=1.3")
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

function sheryAnimation(){
  Shery.imageEffect(".images",{
    style: 5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7944827418995247},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
    
  })
}


loadinganimation();
locomotiveScroll();
cursorAnimation();
contentHover();
sheryAnimation();