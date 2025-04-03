function page1Animation() {
    var tl = gsap.timeline();

    // Animate logo, list items, and toggle button
    tl.from("nav .logo, nav ul li, nav .toggle", {
        y: -30,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        stagger: 0.1
    });
    tl.from(".part1 h2, .branding h1", {
        x: -30,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
    } )
    tl.from(".right h3, .right button", {
        x: 30,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1
    } )
    tl.from(".part2 img", {
        y: -30,        // Move slightly from right
        duration: 0.8, // Slightly longer for smooth entry
        opacity: 0,   // Fade in
        scale: 0.5,   // Start from a smaller size
        ease: "power2.out" // Smooth easing effect
    });
    
    // Ensure hover still works after animation
    gsap.set(".part2 img", { transformOrigin: "center center" });
    
    document.querySelector(".part2 img").addEventListener("mouseenter", () => {
        gsap.to(".part2 img", {
            scale: 1.1, // Scale up on hover
            duration: 0.3,
            ease: "power1.out"
        });
    });
    
    document.querySelector(".part2 img").addEventListener("mouseleave", () => {
        gsap.to(".part2 img", {
            scale: 0.9, // Return to normal size
            duration: 0.3,
            ease: "power1.out"
        });
    });

    // Animate left circle (previously ::before)
    gsap.fromTo('.hero .hero-bg.left',
        {
            x: '-100%',
            y: '-100%',
            scale: 0.5,
            opacity: 0,
        },
        {
            x: '10%',
            y: '10%',
            scale: 1,
            opacity: 0.7,
            duration: 2,
            ease: 'power2.out',
            repeat: -1,
            yoyo: true,
        });

    // Animate right circle (previously ::after)
    gsap.fromTo('.hero .hero-bg.right',
        {
            x: '100%',
            y: '100%',
            scale: 0.5,
            opacity: 0,
        },
        {
            x: '10%',
            y: '10%',
            scale: 1,
            opacity: 0.7,
            duration: 2,
            ease: 'power2.out',
            repeat: -1,
            yoyo: true,
        });
}
gsap.registerPlugin(ScrollTrigger);
page1Animation()

// Progress Bar Scroll Effect
let progressBar = document.getElementById("progress-bar");

ScrollTrigger.create({
    start: 0,
    end: document.documentElement.scrollHeight - window.innerHeight,
    scroller: "main",
    onUpdate: (self) => {
        let scrollPercentage = self.progress * 100;
        document.getElementById("progress-bar").style.width = scrollPercentage + "%";

        console.log("Progress: ", scrollPercentage); // ✅ LOGS PROGRESS
    }
});


// gsap.from(".page2 h2", {
//     y: -30,
//     duration: 0.5,
//     opacity: 0,
//     ease: "power2.inOut",
//     scrollTrigger: {
//         trigger: ".page2",
//         scroller: "main",
//         markers: true,
//         start: "top 50%",
//         end: "top 40%",
//         scrub: 2,
//     }
// })

// SLIDE 2
gsap.registerPlugin(ScrollTrigger);

gsap.from(".page2 h2", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "main",
        // markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.from(".page2 .card1", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page2 .card1",
        scroller: "main",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".page2 .card2", {
    x: 100,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page2 .card2",
        scroller: "main",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".page2 .card3", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page2 .card3",
        scroller: "main",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})

gsap.from(".page3 h2", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "main",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 2
    }
})

gsap.from(".page3 .pcard1", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".page3",
      scroller: "main",
    //   markers: true,
      start: "top 80%",
      end: "top 20%"
    }
  });
  gsap.from(".page3 .pcard2", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    ease: "power2.inOut",
     // Stagger is now enabled

    scrollTrigger: {
      trigger: ".page3",
      scroller: "main",
    //   markers: true,
      start: "top 80%",
      end: "top 20%"
    }
  });
  gsap.from(".page3 .pcard3", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    delay: 1,

    scrollTrigger: {
      trigger: ".page3",
      scroller: "main",
    //   markers: true,
      start: "top 80%",
      end: "top 20%"
    }
  });

  //page 4

  gsap.from(".page4 h2", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".page4",
      scroller: "main",
    //   markers: true,
      start: "top 80%",
      end: "top 20%"
    }
  });

  gsap.from(".page4 video", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    scale: 10,
    ease: "power2.inOut",
    stagger: true,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "main",
    //   markers: true,
      start: "top 80%",
      end: "top 20%"
    }
  });

  gsap.to(".page5 img", {
    rotation: 360, // Rotate 360 degrees along the X-axis
    duration: 8,
    repeat: -1,
    ease: "linear",
    yoyo: true,
    scale: 0.5
  });

