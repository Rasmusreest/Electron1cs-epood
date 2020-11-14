var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var jetBubbles = document.getElementsByClassName("jetBubble");
var rocketManSVG = document.querySelector(".rocketManSVG");
var shakeGroup = document.querySelector(".shakeGroup");
var star = document.querySelector(".star");
var satellite = document.querySelector(".satellite");
var astronaut = document.querySelector(".astronaut");
var starContainer = document.querySelector(".starContainer");
var badgeLink = document.querySelector("#badgeLink");

TweenMax.to(astronaut, 0.05, {
  y: "+=4",
  repeat: -1,
  yoyo: true,
});
var mainTimeline = new TimelineMax({ repeat: -1 });
var mainSpeedLinesTimeline = new TimelineMax({ repeat: -1, paused: false });

mainTimeline.timeScale(6).seek(100);

function createJets() {
  TweenMax.set(jetBubbles, {
    attr: {
      r: "-=5",
    },
  });
  //jet bubbles
  for (var i = 0; i < jetBubbles.length; i++) {
    var jb = jetBubbles[i];
    var tl = new TimelineMax({ repeat: -1 });
    tl.to(jb, 1, {
      attr: {
        r: "+=15",
      },
      ease: Linear.easeNone,
    }).to(jb, 1, {
      attr: {
        r: "-=15",
      },
      ease: Linear.easeNone,
    });

    mainTimeline.add(tl, i / 4);
  }
  //speed lines
  for (var i = 0; i < 7; i++) {
    var sl = document.querySelector("#speedLine" + i);

    var stl = new TimelineMax({ repeat: -1, repeatDelay: Math.random() });
    stl
      .set(sl, {
        drawSVG: false,
      })
      .to(sl, 0.05, {
        drawSVG: "0% 30%",
        ease: Linear.easeNone,
      })
      .to(sl, 0.2, {
        drawSVG: "70% 100%",
        ease: Linear.easeNone,
      })
      .to(sl, 0.05, {
        drawSVG: "100% 100%",
        ease: Linear.easeNone,
      })
      .set(sl, {
        drawSVG: "-1% -1%",
      });

    mainSpeedLinesTimeline.add(stl, i / 23);
  }
  //stars
  for (var i = 0; i < 7; i++) {
    var sc = star.cloneNode(true);
    starContainer.appendChild(sc);
    var calc = (i + 1) / 2;

    TweenMax.fromTo(
      sc,
      calc,
      {
        x: Math.random() * 600,
        y: -30,
        scale: 3 - calc,
      },
      {
        y: Math.random() * 100 + 600,
        repeat: -1,
        repeatDelay: 1,
        ease: Linear.easeNone,
      }
    );
  }

  rocketManSVG.removeChild(star);
}

var satTimeline = new TimelineMax({ repeat: -1 });
satTimeline.to(satellite, 46, {
  rotation: 360,
  transformOrigin: "50% 50%",
  ease: Linear.easeNone,
});

TweenMax.staggerTo(
  ".pulse",
  0.8,
  {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false,
  },
  0.1
);

TweenMax.staggerTo(
  ".satellitePulse",
  0.8,
  {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false,
  },
  0.1
);

createJets();
