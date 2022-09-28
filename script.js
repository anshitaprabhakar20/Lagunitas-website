gsap.to("#bottle",{
    scrollTrigger:{
       trigger:"#page1-right h1",
       scroller:"body",
       start:"top 20%",
       scrub:1,
    },
    rotate:"-15deg",
})
gsap.to("#bottle",{
    scrollTrigger:{
       trigger:"#page5-top h1",
       scroller:"body",
       start:"top 30%",
       scrub:2,
    },
    width:"290px",
    left:"42%",
    opacity:0
})
gsap.to("#none-img",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 30%",
        scrub:2,
     },
     opacity:1
})
var tl=gsap.timeline();
tl.
to(".img-btm-div",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 30%",
        scrub:2,
     },
    delay:0.6,
    y:60,
    duration:1,
    ease:"bounce.in",
    stagger:2
},"-=2")
.from(".img-btm-div",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 30%",
        scrub:2,
     },
    y:60,
    stagger:2,
    duration:1,
    ease:"bounce.out",
},"-=2")
