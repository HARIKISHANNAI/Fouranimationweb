gsap.to("button",{
    delay:3,
    duration:4,
    rotate:360,
    repeat:-1,
    scale: 2,
    opacity:2,
    transformOrigin: "left top",
})
gsap.to(".ns",{
    delay:2,
    duration:4,
    rotate:360,
    repeat:-1,
    z:-300,
    scaleY: 2,
    YoYo:true,
    opacity:2
})
gsap.to(".aa",{
    delay:1,
    duration:2,
    repeat:-1,
    scaleY: 3,
    YoYo:true,
    opacity:2
})
gsap.to(".fi", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    x: 600,
    duration:2,
    delay:3,
    repeat:-1
  });

gsap.to("#hms",{
    scrollTrigger: ".box",
    y:50,
    x:-50,
    delay:1,
    duration:2,
    opacity:1,
    repeat:-1,
    scaleY:2,
    scaleX:1,
})
gsap.to(".ffff",{
    delay:2,
    duration:5,
    scaleX:-10,
})
gsap.to(".fffs",{
    delay:4,
    duration:8,
    scaleX:10,
    repeat:-1
})
gsap.to(".fttf",{
    delay:2,
    duration:2,
    rotate:360,
    scaleY:1,
    repeat:-1
})
gsap.to(".ftts",{
    delay:2,
    duration:2,
    rotate:360,
    scaleY:1,
    repeat:-1
})
