const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//gsap to animate
gsap.from(".nlink",{
    stagger:.1,  //gap 
    y:-15,
    duration:2,
    ease: Power3,
    opacity:0
});

Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});
gsap.from(".anim2",{
    stagger:.3,
    y:50,
    duration: 3,
    ease: Expo,
    opacity:0
});

Shery.imageEffect("#imgntext img",{
    style:4,
    config: {"uColor":{"value":true},"uSpeed":{"value":1.07,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.98,"range":[0,5]},"uFrequency":{"value":2.23,"range":[0,10]},"geoVertex":{"range":[1,64],"value":14.54},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7613697385269941},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.33,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect(".imgff img",{
    style:5,
    config:{"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8356681974074289},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});
gsap.from("#imgntext img",{
    z: 3,
    opacity:0,
    duration:2,
    ease:Expo
});
Shery.imageEffect("#bannerimg",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.26,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":2.31,"range":[0,10]},"geoVertex":{"range":[1,64],"value":11.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4922279792746114},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.71,"range":[0.1,5]},"durationIn":{"value":0.75,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.74,"range":[0,10]},"metaball":{"value":0.36,"range":[0,2]},"discard_threshold":{"value":0.74,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.3,"range":[0,2]},"noise_scale":{"value":18.18,"range":[0,100]} },
    gooey:true
});

