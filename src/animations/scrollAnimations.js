import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const slowScrollUpFadeIn = (el, opDelay = 2, yDelay = 3) => {
  gsap.from(el, opDelay, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom-=20%",
    },
    ease: "expo.out",
    opacity: 0,
    stagger: {
      amount: 0.75,
    },
  })
  gsap.from(el, yDelay, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom-=20%",
    },
    ease: "expo.out",
    y: "10vh",
    stagger: {
      amount: 0.5,
    },
  })
}

export const fadeIn = (el, opDelay = 3) => {
  gsap.from(el, opDelay, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom-=20%",
    },
    opacity: 0,
    stagger: {
      amount: 0.75,
    },
  })
}

export const zoomSlideHero = (el, trg, dur = 5) => {
  gsap.to(el, dur, {
    scrollTrigger: {
      markers: true,
      trigger: trg,
      scrub: 5,
      start: "bottom bottom-=10%",
      toggleActions: "restart none none none",
    },
    ease: "power2.out",
    objectPosition: "100% 50%",
    width: "110%",
  })
}

export const zoomSlideVert = (el, trg = el, dur = 3) => {
  gsap.to(el, dur, {
    scrollTrigger: {
      markers: true,
      trigger: trg,
      scrub: dur,
      start: "top bottom-=20%",
      toggleActions: "restart none none none",
    },
    ease: "power2.out",
    objectPosition: "50% 75%",
    scale: 1.05,
  })
}


